import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './context/theme.js'
import { useEffect, useState } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('body').classList.remove("light", "dark")
    document.querySelector('body').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='dark:bg-slate-800 bg-gray-200 w-full h-screen px-3'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App
