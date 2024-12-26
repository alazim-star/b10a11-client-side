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
import MyBooking from './Components/Pages/MyBooking.jsx';
import ErrorPage from './Components/Pages/ErrorPage.jsx';
import PrivateRoute from './Components/Pages/PrivateRoute.jsx';
import AllRoomShorting from './Components/Pages/special/AllRoomShorting.jsx';
import About from './Components/Pages/About.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
     children:[
      {
        path: "/",
        element: <FeaturedRooms></FeaturedRooms>,
        loader:()=>fetch('https://b10a11-server-side-gray.vercel.app/room'),
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
          const res = await fetch(`https://b10a11-server-side-gray.vercel.app/room`);
          const data = await res.json();
          const singleData = data.find(d => d._id === params.id);
          return singleData; 
        },
      },
     
      {
        path: "/myBooking",
        element: <PrivateRoute>
          <MyBooking></MyBooking>,
        </PrivateRoute>
        
      },
      {
        path: "/allRooms",
        element: <AllRoomShorting></AllRoomShorting>,
        
      },
      {
        path: "/about",
        element: <About></About>,
        
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
        
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
