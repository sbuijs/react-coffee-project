import { CoffeeIcon } from '../coffeeIcon'
import { Link } from "react-router-dom";

export const NavbarBrand = ({ className }) => {
    return (
        <div className={className + ' mb-0p'}>
            <Link
                to="/react-coffee-project/"
                className="nav-link d-flex flex-row"
                aria-current="page">
                <CoffeeIcon />
                <div className='navbar__logo align-self-center'>
                    Coffee
                    <span>
                        the way you like it.
                    </span>
                </div>
            </Link>
        </div>
    )
}