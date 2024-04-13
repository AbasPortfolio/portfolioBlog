import React from 'react';
import UserProvider from './context/userContext'
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Writepage from './pages/Writepage';


const router = createBrowserRouter([
  {
      path: '/',
      element: <UserProvider><Layout/></UserProvider>,
      errorElement: <Error/>,
      children: [
          {index: true, element: <Home/>},
          {
            path: '/signin',
            element: <Login/>
          },
          {
            path: '/register',
            element: <Signup/>
          },
          {
            path: '/write',
            element: <Writepage/>
          },
          {
              path: '/about',
              element: <About/>
          },
          {
              path: '/contact',
              element: <Contact/>
          },
          {
              path: '/posts',
              element: <Blog/>
          },
          {
              path: '/post/:id',
              element: <SinglePost/>
          }
          
      ]
  }

 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

