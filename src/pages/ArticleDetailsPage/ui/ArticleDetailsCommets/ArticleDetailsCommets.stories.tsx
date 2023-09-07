import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetailsCommets } from './ArticleDetailsCommets';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsCommets',
    component: ArticleDetailsCommets,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsCommets>;

const Template: ComponentStory<typeof ArticleDetailsCommets> = (args) => <ArticleDetailsCommets {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
