import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/NavBar.jsx'
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
