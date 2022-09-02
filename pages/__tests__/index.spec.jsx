import React from "react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import { fireEvent, within, render, screen, waitFor } from "@testing-library/react";
import Home from "..";

test("Dropdown exist", () => {
  render(<Home />);
  expect(screen.getByTestId("home-body")).toBeDefined();
})

test("candidates exist", () => {
  render(<Home />);
  expect(screen.getByText("Han Solo")).toBeDefined();
})

test("candidates are filtered by category", async () => {
  const { getByTestId, getByRole } = render(<Home />);
  const selectBox = within(getByTestId("category-dropdown"))
  fireEvent.mouseDown(selectBox.getByRole("button"));
  const listBox = within(getByRole('listbox'));
  fireEvent.click(listBox.getByText("CUSTOMER SUCCESS"));
  await waitFor(() => expect(screen.getByText("Han Solo")).toBeDefined());
  await waitFor(() => expect(screen.queryByText("Khan Noonien Singh")).toBeNull());
})

test("selected category is displayed", async () =>{
  const { getByTestId, getByRole } = render(<Home />);
  const selectBox = within(getByTestId("category-dropdown"))
  fireEvent.mouseDown(selectBox.getByRole("button"));
  const listBox = within(getByRole('listbox'));
  fireEvent.click(listBox.getByText("HR"));
  await waitFor(() => expect(screen.getByText("HR")).toBeDefined());
})