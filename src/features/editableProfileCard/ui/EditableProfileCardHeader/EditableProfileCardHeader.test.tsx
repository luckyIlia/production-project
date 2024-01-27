import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

describe("EditableProfileCardHeader", () => {
    it("renders without crashing", () => {
        render(<EditableProfileCardHeader />);
    });

    it("displays 'Редактировать' button when user can edit and profile is readonly", () => {
        render(<EditableProfileCardHeader />);
        expect(screen.getByTestId("EditableProfileCardHeader.EditButton")).toBeInTheDocument();
    });

    it("displays 'Отменить' and 'Сохранить' buttons when user can edit and profile is not readonly", () => {
        render(<EditableProfileCardHeader />);
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        expect(screen.getByTestId("EditableProfileCardHeader.CancelButton")).toBeInTheDocument();
        expect(screen.getByTestId("EditableProfileCardHeader.SaveButton")).toBeInTheDocument();
    });

    it("calls onEdit when 'Редактировать' button is clicked", () => {
        const onEditMock = jest.fn();
        render(<EditableProfileCardHeader />);
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        expect(onEditMock).toHaveBeenCalled();
    });

    it("calls onCancelEdit when 'Отменить' button is clicked", () => {
        const onCancelEditMock = jest.fn();
        render(<EditableProfileCardHeader />);
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.CancelButton"));
        expect(onCancelEditMock).toHaveBeenCalled();
    });

    it("calls onSave when 'Сохранить' button is clicked", () => {
        const onSaveMock = jest.fn();
        render(<EditableProfileCardHeader />);
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.EditButton"));
        fireEvent.click(screen.getByTestId("EditableProfileCardHeader.SaveButton"));
        expect(onSaveMock).toHaveBeenCalled();
    });
});
