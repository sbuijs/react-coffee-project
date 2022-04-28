export const Button = ({ className, buttonLabel, onClick }) => {

    return (
        //classname is added (and used) to pass in the style
        <button
            className={className + ' m-1'}
            onClick={onClick}>
            {buttonLabel}
        </button>
    )
}
