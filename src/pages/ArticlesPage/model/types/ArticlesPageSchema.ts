import { EntityState } from '@reduxjs/toolkit';
import { SortOrder } from 'shared/types';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error? : string;
    view: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
