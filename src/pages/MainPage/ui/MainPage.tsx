import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Rating } from '@/entities/Rating/ui/Rating/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <Rating
                title={t('Главная страница')}
                feedbackTitle={t('Главная страница')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
