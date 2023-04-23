import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { Article } from 'entities/Article';

const article: Article = {
    id: '1',
    title: '123',
    user: { id: '', username: '123' },
    subtitle: '123asd',
    img: '',
    views: 123,
    createdAt: '',
    type: [],
    blocks: [],
};

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = { };

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/articles?_limit=3',
            method: 'GET',
            status: 200,
            response: [{...article, id: '1'}, { ...article, id: '2'}, { ...article, id: '3'}],
        },
    ],
};
