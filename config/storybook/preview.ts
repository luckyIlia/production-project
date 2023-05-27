import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/StyleDecorator/StyleDecorator';

export const preview: Preview = {
    parameters: {
        decorators: [
            StyleDecorator,
        ],
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
