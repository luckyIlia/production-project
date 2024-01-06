import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ArticleEditForm } from './ArticleEditForm';


describe('ArticleEditForm component', () => {
    it('renders form elements correctly', () => {
        render(<ArticleEditForm />);

        expect(screen.getByLabelText('Title')).toBeInTheDocument();
        expect(screen.getByLabelText('Content')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });

    it('updates state on input change', () => {
        render(<ArticleEditForm />);

        fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
        fireEvent.change(screen.getByLabelText('Content'), { target: { value: 'Test Content' } });

        expect(screen.getByLabelText('Title')).toHaveValue('Test Title');
        expect(screen.getByLabelText('Content')).toHaveValue('Test Content');
    });

});
