import { useRef, useState } from 'react'
import Header from './pages/Header'
import { AppRouter } from './router/AppRouter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <AppRouter/>
    </div>
  )
}

export default App