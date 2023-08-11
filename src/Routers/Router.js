import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import UpdateCategory from "../Components/UpdateCategory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
        
    },
    {
        path: '/category/:id',
        element: <UpdateCategory></UpdateCategory>
        
    }
])