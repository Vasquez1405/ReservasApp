import { IconButton, Typography } from '@mui/material'
import { ReservasLayout } from '../layout/ReservasLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewReserva } from '../../store/reservas/thunks'

export const ReservasPage = () => {

    const { isSaving, active } = useSelector(state => state.reservas);

    const dispatch = useDispatch();

    const onClickNewReserva = () => {
        dispatch(startNewReserva())
    }


    return (
        <ReservasLayout>

            {
                (active !== null)
                    ? <NoteView />
                    : <NothingSelectedView />
            }

            <IconButton disabled={isSaving} onClick={onClickNewReserva} size='large' sx={{ color: 'white', backgroundColor: 'error.main', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </ReservasLayout >
    )
}
