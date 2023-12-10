import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config';
import { addNewReserva, savingNewReserva, setActiveReserva } from './reservasSlice';

export const startNewReserva = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewReserva());

        const { uid } = getState().auth;

        //uid
        const newReserva = {
            codigoReserva: '12425435'
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/sistema/reservas/`))
        const setDocResp = await setDoc(newDoc, newReserva)

        newReserva.id = newDoc.id

        dispatch(addNewReserva(newReserva));
        dispatch(setActiveReserva(newReserva));


    }
}
