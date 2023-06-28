export { initAuthData } from './model/services/initAuthData';

export { useJsonSettings } from './model/selectors/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export type { User, UserSchema } from './model/types/user';

export { UserRole } from './model/consts/consts';

export { userActions, userReducer } from './model/slice/userSlice';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector/roleSelector';
