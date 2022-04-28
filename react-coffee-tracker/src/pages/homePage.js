import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCoffees } from "../features/coffee";
import { getMethods } from "../features/method";
import { getRoasteries } from "../features/roastery";
import { Link } from "react-router-dom";

//components
import { Title } from '../components/UI/title'


export const HomePage = () => {

    const dispatch = useDispatch();
    const coffee = useSelector((state) => state.coffee);
    const method = useSelector((state) => state.method);
    const roastery = useSelector((state) => state.roastery);


    const query = '[_type=="method"]';

    const url = `https://2dcsqrom.api.sanity.io/v2021-06-07/data/query/production?query=*${encodeURIComponent(query)}`;
    // console.log(url);


    useEffect(() => {
        dispatch(getCoffees());
        dispatch(getMethods());
        dispatch(getRoasteries());
    }, [dispatch]);

    return (
        <>
            <div className='container mb-4 d-none'>
                <Title title="Welcome to your coffee walhalla" />
            </div>
            <div className='container d-flex flex-column 
            justify-content-center text-center d-none'>

                <h5 className='mb-3'>You've got:</h5>
                <Link to="/coffees">
                    <p>{coffee.coffees.length} coffees</p>
                </Link>
                <Link to="/roasteries">
                    <p>{roastery.roasteries.length} roasteries</p>
                </Link>
                <Link to="/methods">
                    <p>{method.methods.length} methods</p>
                </Link>
            </div>
        </>
    )
}