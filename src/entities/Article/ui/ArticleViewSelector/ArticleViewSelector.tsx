import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticleView;
   onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [{
    view: ArticleView.SMALL,
    icon: TiledIcon,
}, {
    view: ArticleView.BIG,
    icon: ListIcon,
}];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={index}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notselected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});