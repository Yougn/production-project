export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export type {
    User,
    UserSchema,
} from './model/types/user';

export type {
    UserRole,
} from './model/consts/consts';

export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

export { isUserAdmin, isUserManager, getUserRoles } from './model/selectors/roleSelector/roleSelector';
