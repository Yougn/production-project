import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>1</div>
            <HStack>
                <div>2</div>
                <ListBox
                    defaultvalue={t('Выберите значение')}
                    onChange={() => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: 1 },
                        { value: '2', content: 2 },
                        { value: '3', content: 3 },
                    ]}
                />
            </HStack>
            <div>3</div>
            <div>4</div>
            <div>5</div>
        </Page>
    );
};

export default MainPage;
