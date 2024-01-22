import { render, screen } from "@testing-library/react";
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent";
import { ArticleImageBlock } from '../../model/types/article';
import { ArticleBlockType } from '../..';

describe("ArticleImageBlockComponent", () => {
    const mockBlock: ArticleImageBlock = {
        type: ArticleBlockType.IMAGE,
        id: "some-unique-id",
        src: "mock-image-src",
        title: "Mock Image Title",
    };

    it("renders with the provided block data", () => {
        render(<ArticleImageBlockComponent block={mockBlock} />);

        const imageElement = screen.getByAltText(mockBlock.title);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute("src", mockBlock.src);

        const titleElement = screen.getByText(mockBlock.title);
        expect(titleElement).toBeInTheDocument();
    });

    it("renders without a title when block title is not provided", () => {
        const blockWithoutTitle = { ...mockBlock, title: "" };
        render(<ArticleImageBlockComponent block={blockWithoutTitle} />);

        const titleElement = screen.queryByText(mockBlock.title);
        expect(titleElement).not.toBeInTheDocument();
    });
});
