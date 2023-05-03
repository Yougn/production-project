import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AddCommentForm from '@/features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/ui/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
   className?: string;
   id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text size={TextSize.L} text={t('Комментарии')} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
