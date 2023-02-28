import { UserSchema } from 'entities/User';
import { CounterShema } from 'entities/Counter';

export interface StateSchema {
    counter: CounterShema;
    user: UserSchema;
}
