import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProfileCard } from './ProfileCard';
import { Profile } from '../..';

describe('ProfileCard component', () => {
    const mockData: Profile = {
        first: 'John',
        lastname: 'Doe',
        age: 30,
        city: 'New York',
        username: 'johndoe',
        avatar: 'avatar-url',
    };


    it('renders loading state correctly', () => {
        const { container } = render(<ProfileCard isLoading />);
        expect(container.firstChild).toHaveClass('loading');
    });

    it('renders error state correctly', () => {
        const error = 'Error message';
        const { getByText } = render(<ProfileCard error={error} />);
        expect(getByText(error)).toBeInTheDocument();
    });

    it('renders profile data correctly', () => {
        const { getByPlaceholderText } = render(<ProfileCard data={mockData} />);
        expect(getByPlaceholderText('Ваше имя')).toHaveValue('John');
        expect(getByPlaceholderText('Ваша фамилия')).toHaveValue('Doe');
        expect(getByPlaceholderText('Ваш возраст')).toHaveValue('30');
        expect(getByPlaceholderText('Город')).toHaveValue('New York');
        expect(getByPlaceholderText('Введите имя пользователя')).toHaveValue('johndoe');
        expect(getByPlaceholderText('Введите ссылку на аватар')).toHaveValue('avatar-url');
    });

    it('calls onChange handlers correctly', () => {
        const onChangeFirstname = jest.fn();
        const onChangeLastname = jest.fn();
        const onChangeAge = jest.fn();
        const onChangeCity = jest.fn();
        const onChangeUsername = jest.fn();
        const onChangeAvatar = jest.fn();
        const onChangeCurrency = jest.fn();
        const onChangeCountry = jest.fn();

        const { getByTestId } = render(
            <ProfileCard
                data={mockData}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        );

        fireEvent.change(getByTestId('ProfileCard.firstname'), { target: { value: 'Jane' } });
        fireEvent.change(getByTestId('ProfileCard.lastname'), { target: { value: 'Smith' } });

        expect(onChangeFirstname).toHaveBeenCalledWith('Jane');
        expect(onChangeLastname).toHaveBeenCalledWith('Smith');
        expect(onChangeAge).toHaveBeenCalledWith('25');
        expect(onChangeCity).toHaveBeenCalledWith('Los Angeles');
        expect(onChangeUsername).toHaveBeenCalledWith('janesmith');
        expect(onChangeAvatar).toHaveBeenCalledWith('new-avatar-url');
    });
});
