import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../consts/consts";

describe("getProfileValidateErrors.test", () => {
  test("should work with filled state", () => {
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
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
  describe("getProfileValidateErrors.test", () => {
    test("should work with undefined profile", () => {
      const state: DeepPartial<StateSchema> = {}; // No profile property
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });

    test("should work with null validateErrors in profile", () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          // @ts-ignore
          validateErrors: null,
        },
      };
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(null);
    });

    test("should work with empty validateErrors in profile", () => {
      const state: DeepPartial<StateSchema> = {
        profile: {
          validateErrors: [],
        },
      };
      expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });

    test("should work with missing profile property", () => {
      const state: DeepPartial<StateSchema> = {
        // No profile property in the state
      };
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });

    test("should work with empty profile", () => {
      const state: DeepPartial<StateSchema> = {
        profile: {}, // Empty profile object
      };
      expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
  });

});
