// import { render , screen , cleanup } from '@testing-library/react'
// import Home from '..';
// import { BrowserRouter, Route } from "react-router-dom";

// const MockHome = ()=> {
//     return <BrowserRouter>
//        <Home />
//      </BrowserRouter>;
// }
// test('should render Heading in home component',()=>{
//      render(
//      <MockHome />
//      );
//     const heading = screen.getByRole("heading",{level:3})
//     expect(heading).toBeInTheDocument()
// })

// test('should render button in Home component',()=>{
// render(<MockHome/>);
// const button = screen.getByTestId("btn")
// expect(button).toBeInTheDocument()
// })
// test("should render social media images", () => {
//   render(<MockHome />);
//   const images = screen.getByTestId("images");
//   expect(images).toBeInTheDocument();
// });


import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Home from "..";
import { BrowserRouter } from "react-router-dom";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

afterEach(cleanup);

test("should render Heading in Home component", () => {
  render(<MockHome />);
  const heading = screen.getByRole("heading", { level: 3 });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/Welcome to Home/i);
});

test("should render button in Home component", () => {
  render(<MockHome />);
  const button = screen.getByTestId("btn");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(/Click Me/i);
});

test("should render social media images", () => {
  render(<MockHome />);
  const images = screen.getByTestId("images");
  expect(images).toBeInTheDocument();
});

test("should check button click event", () => {
  render(<MockHome />);
  const button = screen.getByTestId("btn");
  fireEvent.click(button);
  expect(button).toHaveClass("btn-clicked"); // Assuming a class gets added on click
});

test("should render navigation links", () => {
  render(<MockHome />);
  const navLinks = screen.getAllByRole("link");
  expect(navLinks.length).toBeGreaterThan(0);
});

test("should render a hero section", () => {
  render(<MockHome />);
  const heroSection = screen.getByTestId("hero");
  expect(heroSection).toBeInTheDocument();
});

test("should check accessibility attributes", () => {
  render(<MockHome />);
  const button = screen.getByTestId("btn");
  expect(button).toHaveAttribute("aria-label", "Click to proceed");
});
