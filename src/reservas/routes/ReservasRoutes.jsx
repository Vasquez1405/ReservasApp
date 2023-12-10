import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ReservasPage } from '../pages/ReservasPage'

export const ReservasRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ReservasPage />} />
            <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
    )
}
