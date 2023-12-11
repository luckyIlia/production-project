import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tabs, TabItem } from './Tabs';

describe('Tabs component', () => {
    const tabs: TabItem[] = [
        { value: 'tab1', content: 'Tab 1' },
        { value: 'tab2', content: 'Tab 2' },
    ];

    const mockOnTabClick = jest.fn();

    it('calls onTabClick when a tab is clicked', () => {
        const { getByText } = render(
            <Tabs tabs={tabs} value="tab1" onTabClick={mockOnTabClick} />
        );

        const tabElement = getByText('Tab 2');
        fireEvent.click(tabElement);

        expect(mockOnTabClick).toHaveBeenCalledTimes(1);
        expect(mockOnTabClick).toHaveBeenCalledWith(tabs[1]);
    });

});
