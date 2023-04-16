import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'abc',
    items: [
        {
            content: '123',
            value: '123',
        },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: 'abc',
    items: [
        {
            content: '123',
            value: '123',
        },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: 'abc',
    items: [
        {
            content: '123',
            value: '123',
        },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: 'abc',
    items: [
        {
            content: '123',
            value: '123',
        },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: 'abc',
    items: [
        {
            content: '123',
            value: '123',
        },
    ],
};
