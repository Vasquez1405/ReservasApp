import { Box, Grid, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveVuelo } from '../../store/vuelos/vuelosSlice'

export const VueloItem = ({ vuelo }) => {

    const dispatch = useDispatch()

    const onClickVuelo = () => {
        dispatch(setActiveVuelo(vuelo))
    }

    return (

        <Box sx={{ backgroundColor: 'white', mt: 1, mr: 1 }}>
            <ListItemButton onClick={onClickVuelo}>
                <Grid container direction='column'>
                    <ListItemText primary={`${vuelo.aeropuertoOrigen} - ${vuelo.aeropuertoDestino}`} />
                    <ListItemText secondary={`Fecha Salida: ${vuelo.fechaSalida}`} />
                    <ListItemText secondary={`Fecha Llegada: ${vuelo.fechaLlegada}`} />
                    <ListItemText secondary={`Precio: $${vuelo.precio}`} />
                </Grid>
            </ListItemButton>
        </Box >
    )
}
