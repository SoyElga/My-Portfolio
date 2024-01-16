import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom'

import HomePage from './views/HomePage/HomePage';
import AboutPage from './views/AboutPage/AboutPage';
import ProjectPage from './views/Projects/ProjectPage';
import NotFoundPage from './global_components/NotFoundPage/NotFoundPage';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/projects/:projectName',
    element: <ProjectPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App router={router}/>
  </React.StrictMode>,
)
