import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticlesPageFiltres } from './ArticlesPageFiltres';

export default {
    title: 'pages/Article/ArticlesPageFiltres',
    component: ArticlesPageFiltres,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFiltres>;

const Template: ComponentStory<typeof ArticlesPageFiltres> = (args) => <ArticlesPageFiltres {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
