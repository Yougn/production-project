import { articleDetailsPageRecommendationReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';

export const articlesDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationReducer,
});
