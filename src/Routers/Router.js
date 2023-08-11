import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import UpdateCategory from "../Components/UpdateCategory";
import UpdateHome from "../Components/UpdateHome";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
        
    },
    {
        path: '/category/:id',
        element: <UpdateCategory></UpdateCategory>
        
    },
    {
        path: '/allItems/:id',
        element: <UpdateHome></UpdateHome>
        
    },
])