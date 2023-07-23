import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateError';

describe('getProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'james',
            first: 'bob',
            city: 'asd',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
