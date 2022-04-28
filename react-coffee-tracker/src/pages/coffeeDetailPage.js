import { useParams } from 'react-router-dom';

import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCoffees } from "../features/coffee";

import { getRoasteries } from "../features/roastery";
import { getMethods } from "../features/method";

import { Rating } from '../components/Rating/rating';
import { StyledMethod } from '../components/Method/methodCard.style';

export const CoffeeDetailPage = () => {
    const dispatch = useDispatch();
    const coffees = useSelector((state) => state.coffee.coffees);
    const roasteries = useSelector((state) => state.roastery.roasteries);
    const methods = useSelector((state) => state.method.methods);

    useEffect(() => {
        dispatch(getCoffees());
        dispatch(getRoasteries());
        dispatch(getMethods());
    }, [dispatch]);


    const params = useParams();
    const currentCoffeeId = useMemo(() => params.id, [params]);

    const currentCoffee = useMemo(() => {
        return coffees.find(coffee => coffee._id === currentCoffeeId)
    }, [coffees, currentCoffeeId]);

    const currentRoastery = useMemo(() => {
        if (currentCoffee == null) return null;
        return roasteries.find(roastery => roastery._id === currentCoffee.roastery._ref);
    }, [currentCoffee, roasteries])

    const currentMethod = useMemo(() => {
        if (currentCoffee == null) return null;
        if (!currentCoffee.method) return null;
        return methods.find(method => method._id === currentCoffee.method._ref);
    }, [currentCoffee, methods])


    if (currentCoffee == null || currentRoastery == null) {
        return <div>Loading...</div>;
    }
    return (
        <div
            className='container'
            key={currentCoffee._id}>
            <div className='row'>
                <div className='col-3 offset-1 offset-lg-0 mb-4'>
                    <img
                        src={currentCoffee.imageUrl}
                        alt={currentCoffee.name}
                        className='rounded-circle w-100'
                    />
                </div>
                <div className='col-12 col-lg-8 offset-lg-1'>
                    <div className='d-flex justify-content-between'>
                        <h2 className="mb-2 mt-5" data-coffee-id={currentCoffee._id}>
                            {currentCoffee.name}
                        </h2>
                        <Rating
                            rating={currentCoffee.rating}
                            iconSize="12"
                            className="align-self-center" />
                    </div>
                    <p className='mb-4'><i>From: {currentRoastery.name}</i></p>
                    {/* <h6 className='mb-4'>Method: {currentMethod.rating}</h6> */}
                    <div className='mb-5'>
                        <p className='mb-1'><strong>Taste: </strong>{currentCoffee.taste}</p>
                        <p className='mb-1'><strong>Processing: </strong>{currentCoffee.processing} </p>
                    </div>

                    <div className='mb-5'>
                        <h4>Best method for this coffee</h4>
                        <hr />
                        {currentMethod &&
                            <StyledMethod
                                className='card'
                                key={currentMethod._id}
                                method={currentMethod}>
                            </StyledMethod>
                        }
                        {!currentMethod &&
                            <p>You've got no methods..</p>
                        }
                    </div>
                    <h4>Methods applied</h4>
                    <hr />
                </div>
            </div>

        </div>
    )
}