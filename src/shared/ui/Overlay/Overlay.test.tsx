import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Overlay } from "./Overlay";

describe("Overlay component", () => {
    test("renders without crashing", () => {
        const { container } = render(<Overlay />);
        expect(container).toBeInTheDocument();
    });

    test("renders with custom className", () => {
        const { getByTestId } = render(<Overlay className="custom-class" />);
        const overlay = getByTestId("overlay-component");
        expect(overlay).toHaveClass("custom-class");
    });

    test("calls onClick prop when clicked", () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(
            <Overlay onClick={onClickMock} data-testid="overlay-component" />
        );
        const overlay = getByTestId("overlay-component");
        fireEvent.click(overlay);
        expect(onClickMock).toHaveBeenCalled();
    });
});
