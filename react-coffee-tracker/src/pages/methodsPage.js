import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMethods } from "../features/method";

//components
import { Title } from '../components/UI/title'
// import { StyledButton } from '../components/UI/button/button.style'
import { CardGroupWide } from '../components/UI/cardGroupWide'
import { StyledMethod } from '../components/Method/methodCard.style'
import { StyledMethodForm } from '../components/Method/methodForm.style';
import { SortByProperty, SortByDateProperty } from '../features/hooks'
import { Filters } from '../components/Filter/filters';
import { SkeletonMethodCards } from '../components/skeletons/skeletonMethodCards'

export const MethodsPage = () => {

    //Existing Methods
    const dispatch = useDispatch();
    const method = useSelector((state) => state.method);

    //Sorting Methods
    const [sortedMethods, setSortedMethods] = useState(method.methods)
    const [sortType, setSortType] = useState('beanWeight');
    const [ascending, setAscending] = useState(true);
    const [activeFilter, setActiveFilter] = useState(0);

    //Creating Method
    const [formVisible, setFormVisible] = useState(false)

    useEffect(() => {
        dispatch(getMethods());
    }, [dispatch]);

    const toggleForm = (e) => {
        setFormVisible(prevFormVisible => !prevFormVisible)
    }

    const toggleAscending = (e) => {
        setAscending(prevAscending => !prevAscending);
    }

    const filters = [
        {
            title: "beanWeight",
            buttonLabel: "bean weight"
        },
        {
            title: "waterWeight",
            buttonLabel: "water weight"
        },
        {
            title: "createdAt",
            buttonLabel: "date"
        },
        {
            title: "rating",
            buttonLabel: "rating"
        },

    ]

    const handleFilter = (index, sortType) => {
        toggleAscending()
        setActiveFilter(index)
        setSortType(sortType)
    }

    useEffect(() => {
        const sortArray = type => {
            const types = {
                beanWeight: "bean_weight",
                waterWeight: "water_weight",
                rating: "rating",
                createdAt: "_createdAt"
            }
            const sortProperty = types[type];
            if (sortProperty !== types.createdAt) {
                setSortedMethods(SortByProperty(
                    [...method.methods],
                    sortProperty,
                    ascending
                ));
            }
            else {
                setSortedMethods(SortByDateProperty(
                    [...method.methods],
                    sortProperty,
                    ascending
                ));
            }
        };
        sortArray(sortType)
    }, [ascending, method.methods, sortType])

    const submitForm = (data) => {
        console.log(data);
        console.log(`submit the form. send the data to the db.`);
        // dispatch(createMethod({ data }))
        toggleForm()
    }

    return (
        <>
            {!formVisible &&
                <>
                    <div className='container mb-4'>
                        <div className='row'>
                            <div className='
                            col d-flex justify-content-between mb-4'
                            >
                                <Title title="Your methods" />
                                {/* <StyledButton
                                    primary
                                    buttonLabel="Create new method"
                                    className="align-self-center"
                                    onClick={toggleForm}
                                /> */}
                            </div>
                        </div>
                    </div>
                    <Filters
                        filters={filters}
                        ascending={ascending}
                        activeFilter={activeFilter}
                        onFilter={
                            (index, sortType) =>
                                handleFilter(index, sortType)
                        }
                    />
                    <CardGroupWide>
                        {method.status === 'loading' &&
                            <SkeletonMethodCards count={10} />
                        }
                        {sortedMethods && sortedMethods
                            .map((method) => {
                                return (
                                    <StyledMethod
                                        className='card'
                                        key={method._id}
                                        method={method}>
                                    </StyledMethod>
                                )
                            })}
                    </CardGroupWide>
                </>
            }
            {formVisible &&
                <StyledMethodForm
                    onCloseForm={toggleForm}
                    onFormSubmit={submitForm}
                    className=''
                />}
        </>
    )
}