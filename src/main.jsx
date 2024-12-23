import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Authentication/Login.jsx';
import Register from './Components/Authentication/Register.jsx';
import FeaturedRooms from './Components/HomPageShow/FeaturedRooms.jsx';
import ViewDetails from './Components/Pages/ViewDetails.jsx';
import AllRooms from './Components/Pages/AllRooms.jsx';
import MyBooking from './Components/Pages/MyBooking.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
     children:[
      {
        path: "/",
        element: <FeaturedRooms></FeaturedRooms>,
        loader:()=>fetch('http://localhost:5000/room'),
      },
     ]  
        
      },
      {
        path: "/login",
        element: <Login></Login>,
        
      },

      {
        path: "/register",
        element: <Register></Register>,
        
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/room`);
          const data = await res.json();
          const singleData = data.find(d => d._id === params.id);
          return singleData; 
        },
      },
      {
        path: "/allRooms",
        element: <AllRooms></AllRooms>,
        loader:()=>fetch('http://localhost:5000/room'),
      },
      {
        path: "/myBooking",
        element: <MyBooking></MyBooking>,
        
      },
      
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
