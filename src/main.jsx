import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Illustration from './pages/Illustration.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/index', element: <Homepage />},
  {path: '/illustration', element: <Illustration/>},
  {path: '/project', element: <Projects />},
  {path: '/about', element: <About />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
