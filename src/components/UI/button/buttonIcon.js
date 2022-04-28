import { XLg } from "react-bootstrap-icons"

export const ButtonIcon = ({ className, icon, iconSize, onButtonIconClick }) => {

    const onClickHandler = (e) => {
        onButtonIconClick(e)
    }

    return (
        //classname is added (and used) to pass in the style
        <button className={className}>
            {icon = "close" &&
                <XLg
                    className="m-1"
                    fontSize={iconSize}
                    onClick={(e) => onClickHandler(e)}
                />
            }
        </button>
    )
}

// export default Button