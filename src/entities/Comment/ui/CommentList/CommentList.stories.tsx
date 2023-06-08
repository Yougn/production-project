import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: { id: 'i', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Hello world',
            user: { id: 'i', username: 'Vanya' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: { id: 'i', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Hello world',
            user: { id: 'i', username: 'Vanya' },
        },
    ],
    isLoading: true,
};
