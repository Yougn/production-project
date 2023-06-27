import { JsonSettings } from './jsonSettings';
import { FeatureFlags } from "../../../../shared/types/featureFlag";
import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings? : JsonSettings;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
