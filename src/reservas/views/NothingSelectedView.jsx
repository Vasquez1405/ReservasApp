
import { Autocomplete, Button, Grid, IconButton, Input, List, TextField, Typography } from '@mui/material'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import React from 'react'
import { VueloItem } from '../components/VueloItem';
import { useDispatch, useSelector } from 'react-redux';
import { startNewReserva } from '../../store/reservas/thunks';
import { AddOutlined } from '@mui/icons-material';


export const NothingSelectedView = () => {

    const { vuelos, active: vuelo } = useSelector(state => state.vuelos)

    const { isSaving } = useSelector(state => state.reservas);

    const dispatch = useDispatch();

    const onClickNewReserva = () => {
        dispatch(startNewReserva({ vuelo }))
    }

    const options = ['Medellin', 'San Andres'];

    const onSearchMedellin = () => {

        const vuelosFilter = vuelos.filter(vuelo => vuelo.aeropuertoDestino === 'Medellin')

        const listaVuelos = document.getElementById('listAllVuelos');

        console.log(vuelosFilter)

    }
    const onSearchSanAndres = () => {

        const vuelosFilter = vuelos.filter(vuelo => vuelo.aeropuertoDestino === 'San Andres')

        console.log(vuelosFilter)

    }

    return (
        <Grid className='animate__animated animate__fadeIn animate_faster' container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4 }}>

            <Grid container direction='row' justifyContent='center'>
                <Button onClick={onSearchMedellin} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1 }}>Medellin</Button>
                <Button onClick={onSearchSanAndres} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1 }}>San Andres</Button>
            </Grid>

            <Grid item xs={12}>
                <AirplanemodeActiveIcon sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color='white' variant='h5'>Selecciona un vuelo y reserva con "+"</Typography>
            </Grid>
            <Grid>
                <List id='listAllVuelos' direction='row'>
                    {
                        vuelos.map(vuelo => (
                            <VueloItem key={vuelo.id} vuelo={vuelo} />
                        ))
                    }
                </List>
            </Grid>

            <IconButton disabled={isSaving} onClick={onClickNewReserva} size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </Grid>
    )
}
