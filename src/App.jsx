import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

let router = createBrowserRouter([
  {path:"" , element: <Layout/> , children:[
    {index:true , element: <Home/>},
    {path:"about", element: <About/>},
    {path:"portfolio", element: <Portfolio/>},
    {path:"contact", element: <Contact/>},
    {path:"*", element: <NotFound/>}
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
