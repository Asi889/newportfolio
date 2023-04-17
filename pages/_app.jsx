import { createContext, useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
export const Context = createContext();

export default function App({ Component, pageProps }) {
  console.log("appppppp");
    const [darkTheme, setDarkTheme] = useState(true);
    function toggleTheme(){
      setDarkTheme(prev => !prev)
    }

  return <Context.Provider value={{darkTheme,toggleTheme}}><Layout><Component {...pageProps} /></Layout></Context.Provider>
}


