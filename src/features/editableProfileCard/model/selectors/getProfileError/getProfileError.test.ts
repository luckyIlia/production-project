import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "123",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("123");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
  test("should return undefined when profile is null", () => {
    const state: DeepPartial<StateSchema> = {
      // @ts-ignore
      profile: null,
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });

  test("should return undefined when profile is undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined,
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
  test("should return error string", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: "Some error message",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual("Some error message");
  });

  test("should return null as error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        // @ts-ignore
        error: null,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(null);
  });

  test("should return 0 as error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        // @ts-ignore
        error: 0,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(0);
  });

  test("should handle missing profile property", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });

  test("should handle invalid profile structure", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        // Missing 'error' property
        // or unexpected structure
        // Add an unexpected property to profile to simulate an invalid structure
        // For example:
        // @ts-ignore
        someUnexpectedProperty: "unexpected",
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
