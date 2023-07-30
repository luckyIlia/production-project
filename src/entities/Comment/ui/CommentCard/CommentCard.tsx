import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.CommentCard, {}, [className])}>
            comment
        </div>
    );
});
