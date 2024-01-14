import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginModal } from "./LoginModal";

describe("LoginModal", () => {
    test("renders LoginModal with open state", () => {
        render(<LoginModal isOpen onClose={() => {}} />);
        expect(screen.getByTestId("modal")).toBeInTheDocument();
        expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });

    test("renders LoginModal with closed state", () => {
        render(<LoginModal isOpen={false} onClose={() => {}} />);
        expect(screen.queryByTestId("modal")).toBeNull();
        expect(screen.queryByTestId("login-form")).toBeNull();
    });

    test("calls onClose when the modal is closed", () => {
        const onCloseMock = jest.fn();
        render(<LoginModal isOpen onClose={onCloseMock} />);

        act(() => {
            userEvent.click(screen.getByTestId("close-button"));
        });

        expect(onCloseMock).toHaveBeenCalled();
    });
});
