import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import Projects from './pages/Projects';

import './main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page.tsx';
import About from './pages/About/About.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
