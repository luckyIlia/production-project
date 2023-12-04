import { useTranslation } from 'react-i18next';
import React, { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditForm.module.scss';

interface ArticleEditFormProps {
    className?: string;
}

export const ArticleEditForm = memo((props: ArticleEditFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [articleData, setArticleData] = useState({
        title: '',
        content: '',
    });

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArticleData({
            ...articleData,
            title: event.target.value,
        });
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setArticleData({
            ...articleData,
            content: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.ArticleEditForm, {}, [className])}>
            <div>
                <label htmlFor="articleTitle">{t('Title')}</label>
                <input
                    type="text"
                    id="articleTitle"
                    value={articleData.title}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="articleContent">{t('Content')}</label>
                <textarea
                    id="articleContent"
                    value={articleData.content}
                    onChange={handleContentChange}
                />
            </div>
            <button type="submit">{t('Submit')}</button>
        </form>
    );
});
