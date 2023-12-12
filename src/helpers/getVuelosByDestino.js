import React from 'react'
import { useSelector } from 'react-redux'

export const getVuelosByDestino = (destino = '') => {
    const { vuelos } = useSelector(state => state.vuelos)

    const vuelosFilter = vuelos.filter(vuelo => vuelo.aeropuertoDestino === destino)

    return vuelosFilter
}
