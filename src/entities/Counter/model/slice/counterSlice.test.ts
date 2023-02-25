import { CounterShema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterShema = { value: 10 };
        expect(
            counterReducer(state as CounterShema, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterShema = { value: 10 };
        expect(
            counterReducer(state as CounterShema, counterActions.increment()),
        ).toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
