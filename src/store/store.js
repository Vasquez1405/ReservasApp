import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { reservasSlice } from './reservas/reservasSlice'
import { vuelosSlice } from './vuelos/vuelosSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    reservas: reservasSlice.reducer,
    vuelos: vuelosSlice.reducer,
  },
})