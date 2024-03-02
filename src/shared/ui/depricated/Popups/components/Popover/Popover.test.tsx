import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';
import { Button } from '../../../Button';

describe('Popover Component', () => {
    it('renders trigger and content correctly', () => {
        const triggerText = 'Click me';
        const contentText = 'Popover content';

        render(
            <Popover trigger={<Button>{triggerText}</Button>}>
                <div>{contentText}</div>
            </Popover>
        );

        expect(screen.getByText(triggerText)).toBeInTheDocument();
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
        userEvent.click(screen.getByText(triggerText));
        expect(screen.getByText(contentText)).toBeInTheDocument();
    });

});
