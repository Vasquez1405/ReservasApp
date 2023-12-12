
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletingReserva } from '../../store/reservas/thunks'
import { setCreditCard } from '../../store/auth/authSlice'

export const ReservaView = () => {

    const [valorInput, setValorInput] = useState('');

    const dispatch = useDispatch();

    const { active: reserva } = useSelector(state => state.reservas);

    const { codigoReserva, formState } = useForm(reserva);

    const onDelete = () => {
        dispatch(startDeletingReserva())
    }

    const handleChange = (event) => {
        // Obtén el valor del input desde el evento
        const nuevoValor = event.target.value;

        // Actualiza el estado con el nuevo valor
        setValorInput(nuevoValor);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (valorInput.length !== 16) return window.alert('el numero de la tarjeta debe tener 16 caracteres numericos')

        dispatch(setCreditCard(valorInput))

        window.alert('Compra Exitosa')

    }

    return (
        <Grid className='animate__animated animate__fadeIn animate_faster' container direction='column' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={25} fontWeight='light'>{`Codigo De Reserva: ${reserva.codigoReserva}`}</Typography>
                <Typography fontSize={39} fontWeight='light'>{`${reserva.aeropuertoOrigen} - ${reserva.aeropuertoDestino}`}</Typography>
                <Typography fontSize={39} fontWeight='light'>{`$${reserva.precio}`}</Typography>
                <Typography fontSize={25} fontWeight='light'>{`Fecha De Salida: ${reserva.fechaSalida}`}</Typography>
                <Typography fontSize={25} fontWeight='light'>{`Fecha De Llegada: ${reserva.fechaLlegada}`}</Typography>
                <Button onClick={onDelete} sx={{ color: 'white', backgroundColor: 'red', ':hover': { backgroundColor: 'red', opacity: 0.9 }, mr: 1 }}>Cancelar</Button>
            </Grid>

            <Grid sx={{ mt: 10 }}>
                <Grid>
                    <form onSubmit={onSubmit}>
                        <Grid container>
                            <TextField value={valorInput} onChange={handleChange} type='number' maxLength={16} minLength={16} required id="creditCard" label="Tarjeta De Credito" variant="outlined" color="secondary" />
                            <Button type='submit' sx={{ color: 'white', backgroundColor: 'blue', ':hover': { backgroundColor: 'blue', opacity: 0.9 } }}>Comprar</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>

        </Grid>
    )
}
