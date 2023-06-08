import { lazy, FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormmAsync = lazy<FC<AddCommentFormProps>>(
    () => import('./AddCommentForm'),
);
