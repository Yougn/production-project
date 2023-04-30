import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
   className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            direction="bottom left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}
            className={classNames(cls.notificationButton, {}, [className])}
        >
            <NotificationList
                className={cls.notifications}
            />
        </Popover>
    );
});
