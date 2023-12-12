
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletingReserva } from '../../store/reservas/thunks'

export const ReservaView = () => {

    const dispatch = useDispatch();

    const { active: reserva } = useSelector(state => state.reservas);

    const { codigoReserva, formState } = useForm(reserva);

    const onDelete = () => {
        dispatch(startDeletingReserva())
    }

    return (
        <Grid className='animate__animated animate__fadeIn animate_faster' container direction='column' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={25} fontWeight='light'>{`Codigo De Reserva: ${reserva.codigoReserva}`}</Typography>
                <Typography fontSize={39} fontWeight='light'>{`${reserva.aeropuertoOrigen} - ${reserva.aeropuertoDestino}`}</Typography>
                <Typography fontSize={39} fontWeight='light'>{`$${reserva.precio}`}</Typography>
                <Typography fontSize={25} fontWeight='light'>{`Fecha De Salida: ${reserva.fechaSalida}`}</Typography>
                <Typography fontSize={25} fontWeight='light'>{`Fecha De Llegada: ${reserva.fechaLlegada}`}</Typography>
            </Grid>

            <Grid>
                <Button onClick={onDelete} sx={{ color: 'white', backgroundColor: 'red', ':hover': { backgroundColor: 'red', opacity: 0.9 }, mr: 1 }}>Cancelar</Button>

                <Button sx={{ color: 'white', backgroundColor: 'blue', ':hover': { backgroundColor: 'blue', opacity: 0.9 } }}>Comprar</Button>
            </Grid>




        </Grid>
    )
}
