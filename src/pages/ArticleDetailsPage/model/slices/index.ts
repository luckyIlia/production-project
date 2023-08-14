import { combineReducers } from '@reduxjs/toolkit';
import {
    articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { ArticlesDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});
