
import { Autocomplete, Button, Grid, IconButton, Input, List, TextField, Typography } from '@mui/material'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import React, { useState } from 'react'
import { VueloItem } from '../components/VueloItem';
import { useDispatch, useSelector } from 'react-redux';
import { startNewReserva } from '../../store/reservas/thunks';
import { AddOutlined } from '@mui/icons-material';
import { VuelosFilterList } from '../components/VuelosFilterList';
import { setActiveList } from '../../store/vuelos/vuelosSlice';


export const NothingSelectedView = () => {

    const { active: vuelo, list } = useSelector(state => state.vuelos)

    const { isSaving } = useSelector(state => state.reservas);

    const dispatch = useDispatch();

    const options = ['Medellin', 'San Andres', 'Santa Marta', 'Pereira', 'Bogota', 'Bucaramanga', 'Barranquilla', 'Cali', 'Cartagena', 'Miami', 'all']

    const onClickNewReserva = () => {
        dispatch(startNewReserva({ vuelo }))
    }

    const onAllVuelos = () => {
        dispatch(setActiveList(options[10]))
    }

    const onSearchMedellin = () => {

        dispatch(setActiveList(options[0]))
    }
    const onSearchSanAndres = () => {

        dispatch(setActiveList(options[1]))
    }
    const onSearchSantaMarta = () => {

        dispatch(setActiveList(options[2]))
    }
    const onSearchPereira = () => {

        dispatch(setActiveList(options[3]))
    }
    const onSearchBogota = () => {

        dispatch(setActiveList(options[4]))
    }
    const onSearchBucaramanga = () => {

        dispatch(setActiveList(options[5]))
    }
    const onSearchBarranquilla = () => {

        dispatch(setActiveList(options[6]))
    }
    const onSearchCali = () => {

        dispatch(setActiveList(options[7]))
    }
    const onSearchCartagena = () => {

        dispatch(setActiveList(options[8]))
    }
    const onSearchMiami = () => {

        dispatch(setActiveList(options[9]))
    }

    return (
        <Grid className='animate__animated animate__fadeIn animate_faster' container spacing={0} direction='column' alignItems='center' justifyContent='space-between' sx={{ width: 'calc(100vw - 300px)', minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4 }}>

            <Grid container direction='row' justifyContent='center' sx={{ width: 'calc(100vw - 300px)' }}>
                <Button onClick={onAllVuelos} sx={{ color: 'white', borderColor: 'white', backgroundColor: 'primary.main', ':hover': { backgroundColor: 'primary.main', opacity: 0.9 }, mr: 1 }}>Todos Los Vuelos</Button>
                <Button onClick={onSearchMedellin} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Medellin</Button>
                <Button onClick={onSearchSanAndres} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>San Andres</Button>
                <Button onClick={onSearchSantaMarta} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Santa Marta</Button>
                <Button onClick={onSearchPereira} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Pereira</Button>
                <Button onClick={onSearchBogota} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Bogota</Button>
                <Button onClick={onSearchBucaramanga} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Bucaramanga</Button>
                <Button onClick={onSearchBarranquilla} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Barranquilla</Button>
                <Button onClick={onSearchCali} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Cali</Button>
                <Button onClick={onSearchCartagena} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Cartagena</Button>
                <Button onClick={onSearchMiami} sx={{ color: 'primary.main', borderColor: 'white', backgroundColor: 'white', ':hover': { backgroundColor: 'white', opacity: 0.9 }, mr: 1, mb: 1 }}>Miami</Button>

            </Grid>

            <Grid container direction='column' alignItems='center' justifyContent='center'>

                <Grid item xs={12}>
                    <AirplanemodeActiveIcon sx={{ fontSize: 100, color: 'white' }} />
                </Grid>

                <Grid item xs={12}>
                    <Typography color='white' variant='h5'>Selecciona un vuelo y reserva con "+"</Typography>
                </Grid>
            </Grid>



            <Grid>
                {
                    (list === 'all')
                        ? < VuelosFilterList destino='' />
                        : ''


                }
                {
                    options.map((option, indice) => (
                        (option === list)
                            ? <VuelosFilterList key={indice} destino={option} />
                            : ''
                    ))

                }

            </Grid>

            <IconButton disabled={isSaving} onClick={onClickNewReserva} size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </Grid >
    )
}
