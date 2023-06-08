import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from './AdminPanelPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args: any) => (
    <AdminPanelPage {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
