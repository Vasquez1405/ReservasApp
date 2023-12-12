import { Grid, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveVuelo } from '../../store/vuelos/vuelosSlice'

export const VueloItem = ({ vuelo }) => {

    const dispatch = useDispatch()

    const onClickVuelo = () => {
        dispatch(setActiveVuelo(vuelo))
    }

    return (
        <ListItem disablePadding sx={{ backgroundColor: 'white' }}>
            <ListItemButton onClick={onClickVuelo}>
                <Grid container direction='column'>
                    <ListItemText primary={`${vuelo.aeropuertoOrigen} - ${vuelo.aeropuertoDestino}`} />
                    <ListItemText secondary={`Fecha Salida: ${vuelo.fechaSalida}`} />
                    <ListItemText secondary={`Fecha Llegada: ${vuelo.fechaLlegada}`} />
                    <ListItemText secondary={`Precio: $${vuelo.precio}`} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
