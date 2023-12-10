import { createSlice } from '@reduxjs/toolkit'
import { loadReservas } from '../../helpers/loadReservas';

export const reservasSlice = createSlice({
    name: 'auth',
    initialState: {
        isSaving: false,
        messageSaved: '',
        reservas: [],
        active: null,
        // active: {
        //     id: '123',
        //     aeropuertoOrigen: '',
        //     aeropuertoDestino: '',
        //     fechaSalida: '',
        //     fechaLlegada: '',
        //     hora: '',
        // }
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

        }
    },
})
// Action creators are generated for each case reducer function
export const { addNewReserva, setActiveReserva, savingNewReserva, setReservas, setSaving, updateReserva } = reservasSlice.actions