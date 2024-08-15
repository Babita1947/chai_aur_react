import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github, { githubInFolder } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<h1>About</h1>
//       },
//       {
//         path:"github",
//         element:<h1>Github</h1>
//       },
//       {
//         path:"contact",
//         element:<h1>Contact</h1>
//       }
//     ]
//   },

// ])

const router1 = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        loader: (githubInFolder),
        path:"github",
        element:<Github/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router1}/>
  </React.StrictMode>,
)
