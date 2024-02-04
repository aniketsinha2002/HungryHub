import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
//import About from "./components/About.js";
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import { lazy, Suspense } from "react";
import UserContext from "./components/UserContext.js";
import { Provider } from "react-redux";

//-----ROUTING CONFIG---------//
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js"; 
import RestaurantMenu from "./components/ResturantMenu.js";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


//Props => dynamically passes data to a functional component, passing a argument to a function
//Passing props to a component
//When we need to dynamically pass a data to a component -> We'll use props

const AppLayout = () => {
    
    
    //CONTEXT REACT - authentication // CONTEXT PROVIDER
    const [userName, setuserName] = useState();
    
    useEffect(() => {
        // make an API call and send username and password
        const data = {
            name:"Aniket Sinha"
        };
        setuserName(data.name);
    }, [])
    //authentication

    return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: "Default User"}}> 
        <div className="app font-body">
            <Header />
            <Outlet />
       </div>
    </UserContext.Provider>
    </Provider>
    );
    
};
 

// CHUNKING === CODE SPLITTING === DYNAMIC BUNDLING === LAZY LOADING ===ON-DEMAND LOADING
//All the code doesnot come at once -> They come when requested, thus reducing app bundle size when our app grows
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));



//-----ROUTING - GIVING PATHS---------//
const appRouter = createBrowserRouter([
    //takes a lists of paths
    {
        path: "/",
        element: <AppLayout />,
        children:
        [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>LOADING... </h1>}><About/></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>LOADING... </h1>}><Grocery /></Suspense>,
            },
            {
                path: "/resturants/:resID",
                element: <RestaurantMenu/>,
                },
            {
                path: "/cart",
                element: <Cart/>,
            },
        ],
        errorElement: <Error/>,
    },   
]);

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<RouterProvider router={appRouter} />);


 