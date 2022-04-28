import { ArrowDown } from "react-bootstrap-icons"

export const FilterButton = ({ className, buttonLabel, sortType, index, onSort }) => {

    return (
        <button
            className={className}
            key={index}
            onClick={(e) => onSort(e, sortType)}
        >
            {buttonLabel}
            <span>
                <ArrowDown color="black" size={12} />
            </span>
        </button>
    )
}