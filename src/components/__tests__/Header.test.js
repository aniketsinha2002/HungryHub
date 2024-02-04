const { render,screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test('should render Header component with a login button', () => { 
  
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

  const loginButton =  screen.getByRole("button");
  
  //Assertion 
  expect(loginButton).toBeInTheDocument();
  
})


test('should render Header component with a cart component', () => { 
  
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

  const cartItems =  screen.getByText(/Cart/);
  
  //Assertion 
  expect(cartItems).toBeInTheDocument();
  
})

test('should change Login to Logout on click', () => { 
  
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton)
    
    const logoutButton = screen.getByRole("button", { name: "Logout" });
  //Assertion 
  expect(logoutButton).toBeInTheDocument();
  
})