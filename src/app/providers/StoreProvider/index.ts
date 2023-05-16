import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    ThunkConfig,
};

export type {
    AppDispatch,
};
