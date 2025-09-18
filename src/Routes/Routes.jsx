import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Loader from '../components/Loader/Loader';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    HydrateFallback: Loader,
    errorElement:<ErrorPage/>,
    children:[
      { 
        index:true,
        path:"/",
        Component:Home,
        loader:()=>fetch("bookData.json"),
      },
      {
        path:"/about",
        Component:About,
      },
      {
        path:"/bookDetails/:id",
        Component:BookDetails
      }

    ]
  },
]);