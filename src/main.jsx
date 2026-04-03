import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import Users from './components/Users/Users.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'products', Component: Products},
      {
        path: 'users',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {path: 'blogs', Component: Blogs},
      {path: 'about', Component: About}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
