import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ArticleSortSelector } from "./ArticleSortSelector";
import { ArticleSortField } from '@/entities/Article';

describe("ArticleSortSelector", () => {
    const mockSortOptions = [
        { value: "created", content: "дате создания" },
        { value: "title", content: "названию" },
        { value: "views", content: "просмотрам" },
    ];

    const mockOrderOptions = [
        { value: "asc", content: "возрастанию" },
        { value: "desc", content: "убыванию" },
    ];

    it("renders ArticleSortSelector component", () => {
        render(
            <ArticleSortSelector
                sort={ArticleSortField.CREATED}
                order="asc"
                onChangeSort={() => {}}
                onChangeOrder={() => {}}
            />
        );

        // Assert that the component is rendered
        expect(screen.getByLabelText("Сортировать ПО")).toBeInTheDocument();
        expect(screen.getByLabelText("по")).toBeInTheDocument();
    });

    it("triggers onChangeSort when sort is changed", () => {
        const onChangeSortMock = jest.fn();

        render(
            <ArticleSortSelector
                sort={ArticleSortField.CREATED}
                order="asc"
                onChangeSort={onChangeSortMock}
                onChangeOrder={() => {}}
            />
        );

        fireEvent.change(screen.getByLabelText("Сортировать ПО"), {
            target: { value: "title" },
        });

        // Assert that onChangeSort is called with the correct value
        expect(onChangeSortMock).toHaveBeenCalledWith("title");
    });

    it("triggers onChangeOrder when order is changed", () => {
        const onChangeOrderMock = jest.fn();

        render(
            <ArticleSortSelector
                sort={ArticleSortField.CREATED}
                order="asc"
                onChangeSort={() => {}}
                onChangeOrder={onChangeOrderMock}
            />
        );

        fireEvent.change(screen.getByLabelText("по"), {
            target: { value: "desc" },
        });

        expect(onChangeOrderMock).toHaveBeenCalledWith("desc");
    });
});
