export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    User,
    UserSchema,
    UserRole,
} from './model/types/user';

export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector/roleSelector';
