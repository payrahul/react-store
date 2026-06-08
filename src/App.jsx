import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import CategoryList from './pages/category/CategoryList'
import { Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
function App() {
  

  return (
    

    <MainLayout>
     <AppRoutes />
      
      
    </MainLayout>

  );
}

export default App
