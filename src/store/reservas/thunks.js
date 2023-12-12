import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewReserva, deleteReservaById, savingNewReserva, setActiveReserva, setReservas } from './reservasSlice';
import { loadReservas } from '../../helpers/loadReservas';

export const startNewReserva = ({ vuelo }) => {

    return async (dispatch, getState) => {

        dispatch(savingNewReserva());

        const { uid } = getState().auth;

        //uid
        const newReserva = {
            codigoReserva: `${vuelo.id}`,
            aeropuertoOrigen: `${vuelo.aeropuertoOrigen}`,
            aeropuertoDestino: `${vuelo.aeropuertoDestino}`,
            fechaSalida: `${vuelo.fechaSalida}`,
            fechaLlegada: `${vuelo.fechaLlegada}`,
            precio: `${vuelo.precio}`,
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}`))
        const setDocResp = await setDoc(newDoc, newReserva)

        newReserva.id = newDoc.id

        dispatch(addNewReserva(newReserva));
        dispatch(setActiveReserva(newReserva));


    }
}

export const startLoadingReservas = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error('el UID del usuaruio no esta establecido')

        const reservas = await loadReservas(uid)

        dispatch(setReservas(reservas))
    }
}

export const startDeletingReserva = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: reserva } = getState().reservas;

        const docRef = doc(FirebaseDB, `${uid}/${reserva.id}`);
        const resp = await deleteDoc(docRef);

        dispatch(deleteReservaById(reserva.id))

    }
}
