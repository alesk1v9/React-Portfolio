import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio1';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

const router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/resume',
        element: <Resume/>,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
