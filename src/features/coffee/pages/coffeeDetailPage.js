import { useParams } from 'react-router-dom';

import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCoffees } from "../features/coffee";

import { getRoasteries } from "../features/roastery";

import { Rating } from '../components/Rating/rating';

export const CoffeeDetailPage = () => {
    const dispatch = useDispatch();
    const coffees = useSelector((state) => state.coffee.coffees);
    const roasteries = useSelector((state) => state.roastery.roasteries);

    useEffect(() => {
        dispatch(getCoffees());
        dispatch(getRoasteries());
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
                        <h2 className="mb-2" data-coffee-id={currentCoffee._id}>
                            {currentCoffee.name}
                        </h2>
                        <Rating
                            rating={currentCoffee.rating}
                            iconSize="12"
                            className="align-self-center" />
                    </div>
                    <h6 className='mb-4'>By {currentRoastery.name}</h6>
                    <div>
                        <p className='mb-1'>Tastes like: {currentCoffee.taste}</p>
                        <p className='mb-1'>You gave it {currentCoffee.rating} stars</p>
                        <p className='mb-1'>Method: {currentCoffee.processing} </p>
                        <p className='mb-1'>Roastery {currentCoffee.roast} </p>
                    </div>
                </div>
            </div>

        </div>
    )
}