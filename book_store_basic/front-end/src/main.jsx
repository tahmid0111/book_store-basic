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
import Update from './components/update/Update';
import ProgrammerBooks from './pages/ProgrammerBooks';
import New from './pages/New';
import PythonPage from './pages/PythonPage';
import JavaScriptPage from './pages/JavaScriptPage';
import HtmlPage from './pages/HtmlPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <New />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/programmerbooks',
    element: <ProgrammerBooks />,
  },
  {
    path: '/python',
    element: <PythonPage />,
  },
  {
    path: '/javascript',
    element: <JavaScriptPage />,
  },
  {
    path: '/html',
    element: <HtmlPage />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },

  // pages link end
  {
    path: '/readone/:id',
    element: <SingleRead />,
  },
  {
    path: '/update/:id',
    element: <Update />,
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
