import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRoasteries } from "../features/roastery";

//components
import { Title } from '../components/UI/title'
import { CardGroup } from '../components/UI/cardGroup'
import { RoasteryCard } from '../components/Roastery/roasteryCard'


export const RoasteriesPage = () => {

    const dispatch = useDispatch();
    const roastery = useSelector((state) => state.roastery);

    useEffect(() => {
        dispatch(getRoasteries());
    }, [dispatch]);

    return (
        <>
            <div className='container mb-4'>
                <Title title="Your roasteries" />
            </div>
            <CardGroup>
                {roastery.roasteries
                    && roastery.roasteries
                        .map((roastery) => {
                            return (
                                <RoasteryCard
                                    className='card'
                                    key={roastery._id}
                                    roastery={roastery}>
                                </RoasteryCard>
                            )
                        })}
            </CardGroup>
        </>
    )
}