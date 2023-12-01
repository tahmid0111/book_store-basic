import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Home from './pages/Home';
import Registration from './pages/Registration';
import SingleRead from './components/home/SingleRead';
import axios from 'axios';
import Update from './components/update/Update';
import ProgrammerBooks from './pages/ProgrammerBooks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/readone/:id',
    element: <SingleRead />,
  },
  {
    path: '/update/:id',
    element: <Update />,
  },
  {
    path: '/programmerbooks',
    element: <ProgrammerBooks />,
  },
  {
    path: '/update/:id',
    element: <Update />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
