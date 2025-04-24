import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import HomeLayout from '../layout/HomeLayout'
import Error from '../pages/Error'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout />,
    errorElement: <Error />,
    children:[
      {index:true , element: <App />}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
