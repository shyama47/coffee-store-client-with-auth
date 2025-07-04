import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
        hydrateFallbackElement:<span>Loading...</span>
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'coffeeDetail/:id',
        Component: CoffeeDetails
      },
      {
        path: 'updateCoffeeData/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement:<span>Loading...</span>
      },
      {
        path:'signin',
        Component:SignIn
      },
      {
        path:'signup',
        Component:SignUp
      },
      {
        path:'users',
        Component:Users,
        loader:()=>fetch('http://localhost:3000/users'),
        hydrateFallbackElement:<span>Loading...</span>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
