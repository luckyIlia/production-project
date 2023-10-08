import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onCancel,
        onAccept,
        hasFeedback,
        feedbackTitle,
        title,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            setModalOpen(true);
        },
        [],
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                <VStack max gap="32">
                    <Text title={feedbackTitle} />
                    <Input placeholder={t('Ваш отзыв')} />
                    <HStack max gap="16" justify="end">
                        <Button theme={ButtonTheme.OUTLINE_RED}>
                            {t('Закрыть')}
                        </Button>
                        <Button>
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
});
