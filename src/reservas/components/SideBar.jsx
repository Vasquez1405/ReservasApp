import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import React from 'react'
import { useSelector } from 'react-redux'

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth)
    const { reservas } = useSelector(state => state.reservas)

    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} >
            <Drawer variant='permanent' open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {
                            displayName
                        }
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        reservas.map(reserva => (
                            <ListItem key={reserva.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon >
                                        <AirplaneTicketIcon />
                                    </ListItemIcon>
                                    <Grid container direction='column'>
                                        <ListItemText primary={reserva.codigoReserva} />
                                        <ListItemText secondary={'$359.000'} />
                                        <ListItemText secondary={'17-02-2024'} />
                                        <ListItemText secondary={'08:30 am'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
