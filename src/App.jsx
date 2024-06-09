import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ApartmentDetails from './pages/ApartmentDetails'
import ApartmentForm from './pages/ApartmentForm'

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments/add" element={<ApartmentForm />} />
          <Route path="/apartments/edit/:id" element={<ApartmentForm />} />
          <Route path="/apartments/:id" element={<ApartmentDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
