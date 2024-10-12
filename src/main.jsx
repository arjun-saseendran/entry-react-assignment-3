import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import Root from './routes/root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  children: [{
    path: '/',
    element: <App/>
  }]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
