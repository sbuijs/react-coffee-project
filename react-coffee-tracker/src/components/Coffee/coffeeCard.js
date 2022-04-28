import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRoasteries } from "../../features/roastery";

//components
import { Link } from "react-router-dom";
import { Rating } from '../Rating/rating'

export const CoffeeCard = ({ className, coffee }) => {
    const dispatch = useDispatch();
    const roastery = useSelector((state) => state.roastery);
    const currentCoffeesRoasteryID = coffee.roastery._ref;

    useEffect(() => {
        dispatch(getRoasteries());
    }, [dispatch]);

    useEffect(() => {
        // console.log(className);
    }, [dispatch]);

    return (
        <div className={className + ' col card-group position-relative border-0'}>
            <Link
                className="stretched-link"
                to={`/coffees/${coffee._id}`}
            />
            <div className="card__body pb-4 m-1 mb-3">
                <div className="card__image">
                    <img src={coffee.imageUrl} alt={coffee.name} />
                </div>
                <div className="card__info d-flex flex-column">
                    <div className='align-self-end mb-2'>
                        <Rating
                            rating={coffee.rating}
                            iconSize="12"
                            className="align-self-center" />
                    </div>
                    <h5>{coffee.name}</h5>
                    {/* Get the name of the referenced roastery */}
                    {roastery.roasteries
                        .filter(roaster => roaster._id.includes
                            (currentCoffeesRoasteryID))
                        .map(filteredRoastery => {
                            return <h6 key={filteredRoastery.url}>
                                By: {filteredRoastery.name}</h6>
                        })
                    }
                </div>
            </div>
        </div>
    )
}