import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCoffees } from "../features/coffee";

//components
import { Title } from '../components/UI/title'
import { CardGroup } from "../components/UI/cardGroup";
import { StyledCoffee } from '../components/Coffee/coffee.style'

export const CoffeesPage = () => {

    const dispatch = useDispatch();
    const coffee = useSelector((state) => state.coffee);


    useEffect(() => {
        dispatch(getCoffees());
    }, [dispatch]);

    return (
        <>
            <div className='container mb-4'>
                <div className='row'>
                    <div className='col d-flex justify-content-between mb-4'>
                        <Title title="Your coffees" />
                    </div>
                </div>
            </div>

            <CardGroup>
                {coffee?.coffees?.map((coffee) => {
                    return (
                        <StyledCoffee
                            className='card'
                            key={coffee._id}
                            coffee={coffee}>
                        </StyledCoffee>
                    )
                })}
            </CardGroup>
        </>
    )
}