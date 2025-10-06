import React from 'react';
import { BrowserRouter,Route ,Routes } from 'react-router';
import Service from './Pages/Service'


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Service />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
