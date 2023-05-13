import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
   className?: string;
   articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const userdata = useSelector(getUserAuthData);
    const { t } = useTranslation();

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userdata?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleratearticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userdata?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userdata?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleratearticle(starsCount, feedback);
    }, [handleratearticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleratearticle(starsCount);
    }, [handleratearticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <Rating
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
});

export default ArticleRating;
