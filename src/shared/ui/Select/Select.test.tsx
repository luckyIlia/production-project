import { render, fireEvent } from '@testing-library/react';
import { Select, SelectOption } from './Select';

describe('Select Component', () => {
    const options: SelectOption<string>[] = [
        { value: 'option1', content: 'Option 1' },
        { value: 'option2', content: 'Option 2' },
        { value: 'option3', content: 'Option 3' },
    ];

    it('renders select options correctly', () => {
        const { getByText } = render(<Select options={options} />);

        options.forEach((option) => {
            const optionElement = getByText(option.content);
            expect(optionElement).toBeInTheDocument();
        });
    });

    it('calls onChange handler when an option is selected', () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(<Select options={options} onChange={mockOnChange} />);

        const selectElement = getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: 'option2' } });

        expect(mockOnChange).toHaveBeenCalledWith('option2');
    });

    it('disables select when readonly prop is true', () => {
        const { getByRole } = render(<Select options={options} readonly />);
        const selectElement = getByRole('combobox');

        expect(selectElement).toBeDisabled();
    });

});
