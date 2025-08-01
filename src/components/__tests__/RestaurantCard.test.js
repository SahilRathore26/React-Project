import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props data", () => {

  render(<RestaurantCard resData={MOCK_DATA} />);

  const result = screen.getByText("Chinese Wok");

  expect(result).toBeInTheDocument();
})