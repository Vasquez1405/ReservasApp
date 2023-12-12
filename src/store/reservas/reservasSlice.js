import { createSlice } from '@reduxjs/toolkit'

export const reservasSlice = createSlice({
    name: 'reservas',
    initialState: {
        isSaving: false,
        messageSaved: '',
        reservas: [],
        active: null,
    },

    reducers: {
        addNewReserva: (state, action) => {
            state.reservas.push(action.payload);
            state.isSaving = false;
        },
        setActiveReserva: (state, action) => {
            state.active = action.payload
        },
        savingNewReserva: (state) => {
            state.isSaving = true;
        },
        setReservas: (state, action) => {
            state.reservas = action.payload

        },
        setSaving: (state) => {

        },
        updateReserva: (state, action) => {

        },
        clearReservasLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.reservas = [];
            state.active = null;

        },
        deleteReservaById: (state, action) => {
            state.active = null;
            state.reservas = state.reservas.filter(reserva => reserva.id !== action.payload)
        }
    },
})
// Action creators are generated for each case reducer function
export const { addNewReserva, setActiveReserva, savingNewReserva, setReservas, setSaving, updateReserva, deleteReservaById, clearReservasLogout } = reservasSlice.actions