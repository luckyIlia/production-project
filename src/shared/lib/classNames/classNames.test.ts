import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("with mods", () => {
    const expected = "someClass class1 class2 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
      ]),
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
      ]),
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ]),
    ).toBe(expected);
  });
  test("with no parameters", () => {
    expect(classNames).toBe("");
  });
  test("with a single mod and additional classes", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
        classNames("someClass", { hovered: true }, ["class1", "class2"]),
    ).toBe(expected);
  });
  test("with falsy values in mods", () => {
    const expected = "someClass class1 class2";
    expect(
        // @ts-ignore
        classNames("someClass", { hovered: false, scrollable: null }, [
          "class1",
          "class2",
        ]),
    ).toBe(expected);
  });
  test("with multiple classes for a mod", () => {
    const expected = "someClass class1 class2 active";
    expect(
        classNames("someClass", { active: true }, ["class1", "class2"]),
    ).toBe(expected);
  });
  test("with an empty mod object", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });
  test("with multiple mods and additional classes", () => {
    const expected = "someClass class1 class2 hovered active";
    expect(
        classNames("someClass", { hovered: true, active: true }, [
          "class1",
          "class2",
        ]),
    ).toBe(expected);
  });

});
