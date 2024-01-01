import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

jest.mock("@/shared/lib/hooks/useTheme/useTheme", () => ({
    useTheme: () => ({
        theme: "light",
        toggleTheme: jest.fn(),
    }),
}));

describe("ThemeSwitcher component", () => {
    it("renders with light theme icon by default", () => {
        const { container } = render(<ThemeSwitcher />);
        expect(container.querySelector('svg[src="theme-light.svg"]')).toBeInTheDocument();
    });

    it("calls toggleTheme function on button click", () => {
        const { getByRole } = render(<ThemeSwitcher />);
        const button = getByRole("button");
        fireEvent.click(button);
        expect(useTheme().toggleTheme).toHaveBeenCalled();
    });

    it("renders with dark theme icon when theme is dark", () => {
        jest.requireMock("@/shared/lib/hooks/useTheme/useTheme").useTheme = () => ({
            theme: "dark",
            toggleTheme: jest.fn(),
        });
        const { container } = render(<ThemeSwitcher />);
        expect(container.querySelector('svg[src="theme-dark.svg"]')).toBeInTheDocument();
    });
});
