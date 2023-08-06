// eslint-disable max-len

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}
const article = {
} as Article;

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList articles={[article]} />
        </div>
    );
};

export default memo(ArticlesPage);
