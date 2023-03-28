import { lazy, FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormmAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
