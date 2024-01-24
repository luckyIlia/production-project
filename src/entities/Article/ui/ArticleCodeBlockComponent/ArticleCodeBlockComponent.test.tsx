import React from "react";
import { render } from "@testing-library/react";
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent";
import { ArticleBlockType } from '../..';
import { ArticleCodeBlock } from '../../model/types/article';

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: key => key }),
}));

describe("ArticleCodeBlockComponent", () => {
    test("renders without crashing", () => {
        const block: ArticleCodeBlock  = {
            type: ArticleBlockType.CODE,
            id: "1",
            code: "console.log('Hello, world!');",
        };

        const { container } = render(<ArticleCodeBlockComponent block={block} />);
        expect(container).toBeInTheDocument();
    });

    test("renders code block correctly", () => {
        const block = {
            code: "console.log('Testing ArticleCodeBlockComponent');",
        };

        const { getByText } = render(<ArticleCodeBlockComponent block={block} />);
        expect(getByText("Testing ArticleCodeBlockComponent")).toBeInTheDocument();
    });

    test("applies custom className correctly", () => {
        const block = {
            code: "console.log('Custom Class Test');",
        };
        const customClassName = "custom-class";

        const { container } = render(
            <ArticleCodeBlockComponent block={block} className={customClassName} />
        );
        expect(container.firstChild).toHaveClass("custom-class");
    });

});
