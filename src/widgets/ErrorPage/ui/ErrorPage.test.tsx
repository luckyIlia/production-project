import { render, fireEvent } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

describe('ErrorPage component', () => {
    it('renders ErrorPage component correctly', () => {
        const { getByText } = render(<ErrorPage />);
        expect(getByText('Произошла непредвиденная ошибка')).toBeInTheDocument();
        expect(getByText('Обновить страницу')).toBeInTheDocument();
    });

    it('calls location.reload() when button is clicked', () => {
        const { getByText } = render(<ErrorPage />);
        global.location.reload = jest.fn();

        fireEvent.click(getByText('Обновить страницу'));

        expect(global.location.reload).toHaveBeenCalledTimes(1);
    });

});
