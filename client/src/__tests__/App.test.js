import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Create Post and Posts titles", () => {
  render(<App />);
  expect(screen.getByText("Create Post")).toBeInTheDocument();
  expect(screen.getByText("Posts")).toBeInTheDocument();
});