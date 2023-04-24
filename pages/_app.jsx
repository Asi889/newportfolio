import { createContext, useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
export const Context = createContext();
import { useContext } from "react";


export default function App({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme(){
    // setDarkTheme(prev => console.log(prev))
    // setDarkTheme(prev => !prev)
    localStorage.setItem("darkMode", !darkTheme)
    setDarkTheme(!darkTheme)
    console.log(darkTheme);
    console.log("appppppp");

    }

  return <Context.Provider value={{darkTheme,toggleTheme}}><Layout><Component {...pageProps} /></Layout></Context.Provider>
}


