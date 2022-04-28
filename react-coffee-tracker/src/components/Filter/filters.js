import { StyledFilterButton } from '../Filter/filterButton.style';


// export const FilterButtons = () => {

// }

// export const FilterButton = () => {

// }

// export const WhereIWantMyFilters = () => {
//     const [currentFilter, setCurrentFilter] = useState({ name: "some", dir: "asc" });

//     const setFilter = (name) => {
//         if (currentFilter.name === name) {
//             setCurrentFilter({
//                 ...currentFilter,
//                 dir: currentFilter === "asc" ? "desc" : "asc"
//             })
//         } else {
//             setCurrentFilter({
//                 name,
//                 dir: "asc"
//             })
//         }
//     }

//     return (
//         <FilterButtons value={currentFilter} onChange={(name) => setFilter(name)}>
//             <FilterButton label="Some label" name="some" />
//             <FilterButton />
//             <FilterButton />
//             <FilterButton />
//         </FilterButtons>
//     )

// }


export const Filters = ({ filters, ascending, activeFilter, onFilter }) => {
    return (
        <div className='container mb-4'>
            <div className='row'>
                <div className='col d-flex mb-4 align-items-center'>
                    {filters.length > 0 && filters
                        .map((filter, index) => {
                            return (
                                <StyledFilterButton
                                    key={index}
                                    className={`
                                        ${activeFilter === index ?
                                            "active" :
                                            ""}
                                        ${ascending === true ?
                                            "arrowFlipped" :
                                            ""}
                                    `}
                                    buttonLabel={filter.buttonLabel}
                                    sortType={filter.title}
                                    onSort={
                                        (e, sortType) =>
                                            onFilter(index, sortType)
                                    }
                                >
                                </StyledFilterButton>
                            )
                        })}
                </div>
            </div>
        </div >

    )
}

