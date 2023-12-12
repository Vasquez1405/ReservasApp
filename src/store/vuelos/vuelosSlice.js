import { createSlice } from '@reduxjs/toolkit'
export const vuelosSlice = createSlice({
    name: 'vuelos',
    initialState: {
        list: '',
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
        setActiveList: (state, action) => {
            state.list = action.payload
        }
    },
})
// Action creators are generated for each case reducer function
export const { setVuelos, setActiveVuelo, setActiveList } = vuelosSlice.actions