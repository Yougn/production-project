import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Это не финальное состояние модального окна, в ходе всего курса мы будем его менять отрефакторить. Также прошу заметить, что переопределение переменных из темы это АНТИПАТЕРН! Так делать не стоит. Пока оставьте так, а через 1-2 урока мы это пофиксим.'
    ,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Это не финальное состояние модального окна, в ходе всего курса мы будем его менять отрефакторить. Также прошу заметить, что переопределение переменных из темы это АНТИПАТЕРН! Так делать не стоит. Пока оставьте так, а через 1-2 урока мы это пофиксим.'
    ,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
