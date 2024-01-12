import { render, fireEvent } from "@testing-library/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";
import { ArticleType } from "@/entities/Article";

describe("ArticleTypeTabs", () => {
    it("renders ArticleTypeTabs component with tabs", () => {
        const { getByText } = render(
            <ArticleTypeTabs value={ArticleType.ALL} onChangeType={() => {}} />
        );

        expect(getByText("Все статьи")).toBeInTheDocument();
        expect(getByText("Айти")).toBeInTheDocument();
        expect(getByText("Экономика")).toBeInTheDocument();
        expect(getByText("Наука")).toBeInTheDocument();
    });

    it("calls onChangeType when a tab is clicked", () => {
        const onChangeTypeMock = jest.fn();
        const { getByText } = render(
            <ArticleTypeTabs value={ArticleType.ALL} onChangeType={onChangeTypeMock} />
        );

        fireEvent.click(getByText("Айти"));
        expect(onChangeTypeMock).toHaveBeenCalledWith(ArticleType.IT);

        fireEvent.click(getByText("Экономика"));
        expect(onChangeTypeMock).toHaveBeenCalledWith(ArticleType.ECONOMICS);
    });
});
