import React, { useMemo } from 'react'
import { getVuelosByDestino } from '../../helpers/getVuelosByDestino'
import { Grid, List } from '@mui/material'
import { VueloItem } from './VueloItem'
import { useSelector } from 'react-redux'

export const VuelosFilterList = ({ destino }) => {

    const { vuelos } = useSelector(state => state.vuelos)

    const vuelosFilter = getVuelosByDestino(destino)

    return (
        <Grid container id='listVuelosFilter' direction='row'>
            {

                (destino === '')
                    ? vuelos.map(vuelo => (
                        <VueloItem key={vuelo.id} vuelo={vuelo} />
                    ))
                    : vuelosFilter.map(vuelo => (
                        <VueloItem key={vuelo.id} vuelo={vuelo} />
                    ))
            }
        </Grid>
    )
}
