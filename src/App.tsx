import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from './components/pages/notFound';
import { Outlet } from './components/layout/outlet';
import { Home } from './components/pages/home';
import { PageDetails } from './components/pages/pageDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PageDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
