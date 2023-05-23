import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleIncrement = () => {
        // dispatch(counterActions.increment());
        increment();
    };

    const handleDecrement = () => {
        // dispatch(counterActions.decrement());
        decrement();
    };

    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={handleIncrement}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
            <Button
                onClick={handleAdd}
                data-testid="add-btn"
            >
                {t('add')}
            </Button>
        </div>
    );
};
