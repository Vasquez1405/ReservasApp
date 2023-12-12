import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'
import { setOffReserva } from '../../store/reservas/reservasSlice'

export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch()

    const onLogout = () => {

        dispatch(startLogout())

    }
    const onMenu = () => {

        dispatch(setOffReserva())

    }

    return (
        <AppBar position='fixed' sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }} >
            <Toolbar>
                <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography onClick={onMenu} variant='h6' noWrap component='div'>ReservasApp</Typography>

                    <IconButton onClick={onLogout} color='error'>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
