import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadVuelos = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe')

    const collentionRef = collection(FirebaseDB, `vuelos`)
    const docs = await getDocs(collentionRef);

    const vuelos = [];

    docs.forEach(doc => {
        vuelos.push({ id: doc.id, ...doc.data() })
    });

    // return vuelos.filter(vuelo => vuelo.aeropuertoDestino === destino);
    return vuelos;

}
