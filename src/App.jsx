import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full h-screen px-3'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
