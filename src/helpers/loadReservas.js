import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadReservas = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe')

    const collentionRef = collection(FirebaseDB, `${uid}/sistema/reservas`)
    const docs = await getDocs(collentionRef);

    const reservas = [];

    docs.forEach(doc => {
        reservas.push({ id: doc.id, ...doc.data() })
    });

    return reservas;

}
