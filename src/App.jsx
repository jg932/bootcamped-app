import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Companies from './pages/Companies/Companies'
import CreateCompany from './pages/Companies/CreateCompany'
import CompanyDetail from './pages/Companies/CompanyDetail'
import Listings from './pages/Listings/Listings'
import ListingForm from './pages/Listings/ListingForm'
import ListingDetail from './pages/Listings/ListingDetail'

// import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/companies"
          element={<Companies />}
        />
        <Route
          path="/companies/create"
          element={<CreateCompany />}
        />
        <Route
          path="/companies/:id"
          element={<CompanyDetail />}
        />
        <Route
          path="/listings"
          element={<Listings />}
        />
        <Route
          path="/listings/create"
          element={<ListingForm />}
        />
        <Route
          path="/listings/:id"
          element={<ListingDetail />}
        />
      </Routes>
    </>
  )
}

export default App
