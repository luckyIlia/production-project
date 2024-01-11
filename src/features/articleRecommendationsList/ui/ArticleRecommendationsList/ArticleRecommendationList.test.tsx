import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

jest.mock("../../api/articleRecommendationsApi", () => ({
    useArticleRecommendationsList: jest.fn(() => ({
        isLoading: false,
        data: [
            {
                id: 1,
                title: "Sample Article",
            },
        ],
        error: null,
    })),
}));

describe("ArticleRecommendationsList", () => {
    it("renders articles when data is available", async () => {
        render(<ArticleRecommendationsList />);

        // Wait for the data to be loaded
        await waitFor(() => {
            expect(screen.getByText("Sample Article")).toBeInTheDocument();
        });

        // You can add more assertions as needed
    });

    it("renders nothing when loading", () => {
        jest.resetAllMocks();
        jest.mock("../../api/articleRecommendationsApi", () => ({
            useArticleRecommendationsList: jest.fn(() => ({
                isLoading: true,
                data: null,
                error: null,
            })),
        }));

        render(<ArticleRecommendationsList />);

        expect(screen.queryByTestId("ArticleRecommendationsList")).toBeNull();
    });

    it("renders nothing on error", async () => {
        jest.resetAllMocks();
        jest.mock("../../api/articleRecommendationsApi", () => ({
            useArticleRecommendationsList: jest.fn(() => ({
                isLoading: false,
                data: null,
                error: new Error("Test error"),
            })),
        }));

        render(<ArticleRecommendationsList />);

        await waitFor(() => {
            expect(screen.queryByTestId("ArticleRecommendationsList")).toBeNull();
        });
    });

});
