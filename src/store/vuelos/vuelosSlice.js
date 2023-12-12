import { createSlice } from '@reduxjs/toolkit'
export const vuelosSlice = createSlice({
    name: 'vuelos',
    initialState: {
        isSaving: false,
        messageSaved: '',
        vuelos: [],
        active: null,
    },
    reducers: {
        setVuelos: (state, action) => {
            state.vuelos = action.payload

        },
        setActiveVuelo: (state, action) => {
            state.active = action.payload
        },
    },
})
// Action creators are generated for each case reducer function
export const { setVuelos, setActiveVuelo } = vuelosSlice.actions