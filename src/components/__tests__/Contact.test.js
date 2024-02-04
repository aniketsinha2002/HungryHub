import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test('should load contact us component', () => {  
    render(<Contact />);

  const headnig =  screen.getByRole("heading");
  
  //Assertion
  expect(headnig).toBeInTheDocument();
  
})


test('should load button inside this component', () => { 
    render(<Contact />);

  const button =  screen.getByRole("button");
  
  //Assertion
  expect(button).toBeInTheDocument();
  
})

//test or it -> same

it('should load 2 input boxes on the contact component', () => { 
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox")
  
    //Assertion
    expect(inputBoxes.length).toBe(2);  
})