import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationReducer } from '../../model/slices/articleDetailsPageRecommendationSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articlesDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsPageRecommendationReducer,
    });
