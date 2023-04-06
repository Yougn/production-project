import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollByPath, scrollSaveActions } from 'feachers/ScrollSave';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/ui/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/ui/hooks/useInitialEffect/useInitialEffect';
import { useTrottle } from 'shared/ui/hooks/useTrottle/useTrottle';
import { useInfiniteScroll } from '../../shared/ui/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children?: ReactNode;
   onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useTrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
});
