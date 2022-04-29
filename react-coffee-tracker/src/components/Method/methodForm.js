import { useState, useEffect } from "react"
import { MethodFormContent } from "./methodFormContent"
import { StyledButton } from "../UI/button/button.style"
import { StyledButtonIcon } from "../UI/button/buttonIcon.style"
import { StopwatchInputField } from "../Stopwatch/stopwatchInputField"
import { Icon } from '../UI/icon'

export const MethodForm = ({ className, onCloseForm, onFormSubmit }) => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState({})

    const goToNextPage = (e) => {
        setPage((page) => page + 1)
    }
    const goToPrevPage = (e) => {
        setPage((page) => page - 1)
    }

    const updateData = (type, newData) => {
        setData(data => {
            return { ...data, [type]: newData }
        })
    }

    const onClickHandler = (e) => {
        onCloseForm(e)
    }

    useEffect(() => {
        // console.log(data);
    }, [data])

    const getInputValue = (e) => {
        //get the name of the data
        const dataName = e.target.getAttribute("data-name")
        updateData(dataName, e.target.value)
    }

    const onSubmitHandler = () => {
        onFormSubmit(data)
    }

    const handleEnter = (e) => {
        getInputValue(e)
        goToNextPage()
    }


    const pages = [
        {
            name: "page1",
            title: "Coffee beans",
            icon: <Icon name="bean" fontSize="32" />,
            render() {
                return (
                    <MethodFormContent
                        title="Coffee beans"
                        dataName="bean_weight"
                        unit="grams"
                        type="number"
                        icon="bean"
                        placeholder="0"
                        currentValue={data.bean_weight}
                        onGettingInput={e => getInputValue(e)}
                        onEnter={handleEnter}
                    />
                )
            }
        },
        {
            name: "page2",
            title: "Water temperature",
            icon: <Icon name="temperature" fontSize="32" />,
            render() {
                return (
                    <MethodFormContent
                        title="Water temperature"
                        dataName="temperature"
                        unit="°C"
                        icon="temperature"
                        placeholder="0"
                        currentValue={data.temperature}
                        onGettingInput={e => getInputValue(e)}
                        onEnter={handleEnter}
                    />
                )
            }
        },
        {
            name: "page3",
            title: "Water weight",
            icon: <Icon name="water" fontSize="32" />,
            render() {
                return (
                    <MethodFormContent
                        title="Water weight"
                        dataName="water_weight"
                        unit="grams"
                        icon="water"
                        placeholder="0"
                        currentValue={data.water_weight}
                        onGettingInput={e => getInputValue(e)}
                        onEnter={handleEnter}
                    />
                )
            }
        },
        {
            name: "page4",
            title: "Extraction time",
            icon: <Icon name="time" fontSize="32" />,
            render() {
                return (
                    <StopwatchInputField />
                )
            }
        }
    ]

    const previousButton =
        <StyledButton
            primary
            previous
            buttonLabel="Previous"
            onClick={goToPrevPage}
        />;

    const nextButton =
        <StyledButton
            primary
            buttonLabel="Next"
            onClick={goToNextPage}
        />;

    const submitButton =
        <StyledButton
            primary
            type="submit"
            buttonLabel="Save method"
            onClick={onSubmitHandler}
        />;

    return (
        <div className={className + ' container-fluid'}>
            <div className="row d-flex flex-column align-content-center">
                <div className="col-10 col-md-6 col-lg-4">

                    <div className="d-flex flex-row justify-content-end m-1">
                        <StyledButtonIcon
                            icon="close"
                            iconSize="36"
                            onButtonIconClick={onClickHandler}
                        />
                    </div>

                    {/* if page is equal to the page number then add the pages icon and render */}
                    {page && pages[page - 1].icon}
                    {page &&
                        <div className="m-1 mb-3">
                            <h5>{pages[page - 1].title}</h5>
                        </div>
                    }
                    {page && pages[page - 1].render()}


                    <div className="d-flex">
                        {page === 1 && nextButton}
                        {page === 2 && previousButton}
                        {page === 2 && nextButton}
                        {page === 3 && previousButton}
                        {page === 3 && nextButton}
                        {page === 4 && previousButton}
                        {page === 4 && submitButton}
                        {page === 4 &&
                            <p><i>(Currently saving function doesn't work)</i></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

