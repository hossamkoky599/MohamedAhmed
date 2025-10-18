import React, { useState, useEffect } from 'react';
import { BrowserRouter,Route ,Routes } from 'react-router';
import RoutesList from "./Routes/RoutesList";
import Preloader from './Pages/Preloader';



function App() {
 const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 
  return (
     <>
      {loading && <Preloader imageSrc="/images/image.png" duration={1200} />}
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  )
}

export default App
