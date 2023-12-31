
import { ReservasLayout } from '../layout/ReservasLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { ReservaView } from '../views/ReservaView'
import { useSelector } from 'react-redux'

export const ReservasPage = () => {

    const { active } = useSelector(state => state.reservas);

    return (
        <ReservasLayout>

            {
                (active !== null)
                    ? <ReservaView />
                    : <NothingSelectedView />
            }


        </ReservasLayout >
    )
}
