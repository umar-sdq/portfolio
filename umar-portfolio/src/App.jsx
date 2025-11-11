import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout/RootLayout.jsx'
import About from './Components/About/About.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Passions from './Components/Passions/Passions.jsx'
import Contact from './Components/Contact/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/passions', element: <Passions /> },
      { path: '/contact', element: <Contact /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App