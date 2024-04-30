import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { RouterProvider } from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about-me',
          element: <AboutMe/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
 
)
