import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
