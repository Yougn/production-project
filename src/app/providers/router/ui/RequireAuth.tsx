import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[],
}

export function RequireAuth({ children, roles } : RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requireRole) => {
            const hasRequireRole = userRoles?.includes(requireRole);
            return hasRequireRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequireRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
