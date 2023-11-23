import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleEditForm } from './ArticleEditForm';

export default {
    title: 'shared/ArticleEditForm',
    component: ArticleEditForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditForm>;

const Template: ComponentStory<typeof ArticleEditForm> = (args) => <ArticleEditForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
