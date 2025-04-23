import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {path: '/',
   element:<RootLayout/>,
   errorElement : <Error/>,
   children:[
    {index:true, element:<Home/>},//path:''
    {path: 'products', element:<Products/>},
    {path: 'products/:productId', element:<ProductDetails/>}
   ]
  }
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
