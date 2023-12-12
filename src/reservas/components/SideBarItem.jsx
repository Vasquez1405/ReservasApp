import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveReserva } from '../../store/reservas/reservasSlice';

export const SideBarItem = ({ reserva }) => {

    const dispatch = useDispatch()

    const onClickReserva = () => {
        dispatch(setActiveReserva(reserva))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickReserva}>
                <ListItemIcon >
                    <AirplaneTicketIcon />
                </ListItemIcon>
                <Grid container direction='column'>
                    <ListItemText primary={`${reserva.aeropuertoOrigen} - ${reserva.aeropuertoDestino}`} />
                    <ListItemText secondary={`${reserva.precio}`} />
                    <ListItemText secondary={`${reserva.fechaSalida}`} />
                    <ListItemText secondary={`${reserva.fechaLlegada}`} />
                    <ListItemText secondary={'08:30 am'} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
