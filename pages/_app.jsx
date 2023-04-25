import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
export const Context = createContext();

export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    localStorage.setItem("darkMode", !darkTheme)
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode")
    if (isDarkMode) {
      setDarkTheme(JSON.parse(isDarkMode))
      return
    }
    localStorage.setItem("darkMode", darkTheme)
  }, [])

  return <Context.Provider value={{ darkTheme, toggleTheme }}><Layout><Component {...pageProps} /></Layout></Context.Provider>
}


