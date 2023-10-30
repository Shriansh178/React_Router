import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/contact'
import User from './component/User/User'
import Github from './component/GIthub/Github'


// const router = createBrowserRouter ([
//   {
// path: '/',
// element :<Layout/>,
// children : [
//   {path:"",
// element:<Home/>
// },
// {path:"about",
// element:<About/>},
// {path:"Contact",
// element:<Contact/>}
// ]
// }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='About' element ={<About/>}/>
    <Route path='Contact' element ={<Contact/>}/>
    <Route path='user/:userid' element={<User />} />
    <Route path='Github' element={<Github />} />
  </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
