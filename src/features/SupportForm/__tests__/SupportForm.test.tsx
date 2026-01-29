import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import SupportForm from "../views/SupportForm";

it("moves through all steps", async () => {
  const user = userEvent.setup();
  render(<SupportForm />);

  expect(screen.getAllByText(/personal information/i)[0]).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /next/i }));

  expect(
    screen.getAllByText(/family & financial info/i)[0],
  ).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /next/i }));

  expect(screen.getAllByText(/situation descriptions/i)[0]).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
