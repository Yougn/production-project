import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = () => {
    const { t, i18n } = useTranslation('about');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
