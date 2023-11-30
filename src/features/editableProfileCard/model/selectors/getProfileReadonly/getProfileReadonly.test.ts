import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe("getProfileReadonly.test", () => {
  test("should work with filled state", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
  test("should work with null profile", () => {
    const state: DeepPartial<StateSchema> = {
      // @ts-ignore
      profile: null,
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
  test("should work when readonly property is missing", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        // missing readonly property
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
  test("should work with readonly set to false", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });

  test("should work with readonly set to a non-boolean value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        // @ts-ignore
        readonly: "someValue", // for example, a string instead of a boolean
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual("someValue");
  });
});
