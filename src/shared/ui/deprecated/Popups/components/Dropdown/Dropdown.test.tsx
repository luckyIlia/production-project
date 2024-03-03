import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown, DropdownItem } from './Dropdown';
import { Button } from '../../../Button';

describe('Dropdown component', () => {
    const items: DropdownItem[] = [
        { content: 'Item 1', onClick: jest.fn() },
        { content: 'Item 2', onClick: jest.fn(), disabled: true },
        { content: 'Item 3', href: '/some-link' },
    ];

    it('renders the dropdown component with provided items', () => {
        const { getByText } = render(<Dropdown items={items} trigger={<Button>Trigger</Button>} />);
        expect(getByText('Trigger')).toBeInTheDocument();
        items.forEach((item) => {
            if (item.content) {
                expect(getByText(item.content as string)).toBeInTheDocument();
            }
        });
    });

    it('calls onClick handler when an item is clicked', () => {
        const { getByText } = render(<Dropdown items={items} trigger={<Button>Trigger</Button>} />);

        fireEvent.click(getByText('Item 1'));
        expect(items[0].onClick).toHaveBeenCalledTimes(1);
        fireEvent.click(getByText('Item 2'));
        expect(items[1].onClick).not.toHaveBeenCalled();
    });

    it('navigates to the specified link when an item with href is clicked', () => {
        const { getByText } = render(<Dropdown items={items} trigger={<Button>Trigger</Button>} />);

        const link = getByText('Item 3');
        expect(link).toHaveAttribute('href', '/some-link');
    });
});
