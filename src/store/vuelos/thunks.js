import { loadVuelos } from "../../helpers/loadVuelos";
import { setVuelos } from "./vuelosSlice";

export const startLoadingVuelos = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error('el UID del usuaruio no esta establecido')

        const vuelos = await loadVuelos(uid)

        dispatch(setVuelos(vuelos))
    }
}