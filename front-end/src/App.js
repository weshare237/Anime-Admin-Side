import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './Pages/Index'

function App() {
  return (
    <Router>
      {/* <ToastContainer position='top-center' /> */}
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </Router>
  )
}

export default App
