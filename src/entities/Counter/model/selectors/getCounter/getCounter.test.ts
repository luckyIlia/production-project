import { StateSchema } from "@/app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
  test("should return counter value when it's zero", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
  test("should return counter value when it's negative", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: -5 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: -5 });
  });
  test("should return default counter value when it's undefined", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCounter(state as StateSchema)).toEqual(undefined);
  });
  test("should return default counter value when state is empty", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCounter(state as StateSchema)).toEqual(undefined);
  });
  test("should return default counter value when state is null", () => {
    // @ts-ignore
    const state: DeepPartial<StateSchema> = null;
    expect(getCounter(state as StateSchema)).toEqual(undefined);
  });
  test("should return default counter value when counter property is missing in state", () => {
    const state: DeepPartial<StateSchema> = {
      // No counter property in state
    };
    expect(getCounter(state as StateSchema)).toEqual(undefined); // Modify as per expected behavior
  });
});
