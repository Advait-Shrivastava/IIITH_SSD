import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import StudentQuery from './pages/studentquery'

const App = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    return (
        <div>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    {token && <Route path="/student/addQuery" element={<StudentQuery/>}/>}
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App