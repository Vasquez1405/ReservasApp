import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid className='animate__animated animate__fadeIn animate_faster' container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4 }}>
            <Grid item xs={12}>
                <AirplanemodeActiveIcon sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color='white' variant='h5'>Selecciona un vuelo</Typography>
            </Grid>
        </Grid>
    )
}
