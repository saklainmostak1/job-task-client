import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container mx-auto">
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
