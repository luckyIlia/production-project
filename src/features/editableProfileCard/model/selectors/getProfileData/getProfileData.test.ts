import { StateSchema } from "@/app/providers/StoreProvider";
import { Currency } from "@/entities/Currency";
import { getProfileData } from "./getProfileData";
import { Country } from '@/entities/Country';

describe("getProfileData.test", () => {
  test("should return error", () => {
    const data = {
      username: "admin",
      age: 22,
      country: Country.Armenia,
      lastname: "john doe",
      first: "asd",
      city: "asf",
      currency: Currency.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
  test("should return an empty object when profile data is an empty object", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {},
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual({});
  });
  test("should return undefined when profile is undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined,
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
  test("should return profile data with unexpected fields", () => {
    const dataWithExtraFields = {
      username: "admin",
      age: 22,
      country: Country.Armenia,
      lastname: "john doe",
      first: "asd",
      city: "asf",
      currency: Currency.USD,
      extraField: "additional value",
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: dataWithExtraFields,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(dataWithExtraFields);
  });


});
