import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMe from './routes/AboutMe';
import Introduction from './components/Introduction';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Client from './routes/Client';
import Testimonials from './routes/Testimonials';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'about-me', element: <AboutMe /> },
      { path: 'projects', element: <Projects /> },
      { path: 'resume', element: <Resume /> },
      { path: 'client', element: <Client /> },
      { path: 'testimonials', element: <Testimonials /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {window.location.pathname === '/' && <Introduction />}
    </RouterProvider>
  </React.StrictMode>
);
