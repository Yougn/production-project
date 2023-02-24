import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            {/* <BugButton /> */}
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
