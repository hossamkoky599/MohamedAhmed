import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function LayOutWithHF() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <Header 
        theme={theme} 
        setTheme={setTheme} 
        language={language} 
        setLanguage={setLanguage} 
      />
      
      <main style={{ paddingTop: '80px' }}>
        <Outlet context={{ language, theme }} />
      </main>
     
      <Footer language={language} />
    </div>
  );
}