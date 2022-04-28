import { StyledFilterButton } from "../components/UI/button/filterButton.style"

export const FilterButton = ({ buttonLabel, className, sortType, index, onSort, direction }) => {


    return (
        <StyledFilterButton
            primary
            key={index}
            buttonLabel={buttonLabel}
            className={className}
            filterDirection={direction}
            onClick={(e) => onSort(e, sortType)}
        />
    )
}
