import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'
import Serie from './Pages/Serie'
import Saison from './Pages/Saison'
import Episode from './Pages/Episode'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

if (window?.location.pathname == '/') require('./Pages/Login/Login.css')

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Index />} />
        <Route path='/manage-series-movies' element={<Serie />} />
        <Route path='/manage-saisons' element={<Saison />} />
        <Route path='/manage-episodes' element={<Episode />} />
      </Routes>
    </Router>
  )
}

export default App
