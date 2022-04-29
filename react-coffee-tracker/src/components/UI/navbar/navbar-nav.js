import { Link } from "react-router-dom";
export const NavbarNav = ({ className }) => {
    return (
        <div className={className}>
            {/* Used link instead of NavLink beacuse of github pages */}
            <Link
                to="/react-coffee-project/"
                className="nav-link active"
                aria-current="page">
                Coffees
            </Link>
            <Link
                to="/react-coffee-project/roasteries"
                className="nav-link active"
                aria-current="page">
                Roasteries
            </Link>
            <Link
                to="/react-coffee-project/methods"
                className="nav-link active"
                aria-current="page">
                Methods
            </Link>
        </div>
    )
}