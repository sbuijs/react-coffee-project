import { Globe } from "react-bootstrap-icons"
export const RoasteryCard = ({ className, roastery }) => {
    return (
        <div className={className + ' col card-group position-relative border-0'}>
            <div className="card__body p-4 m-1 border w-100">
                <ul className="list-unstyled text-center mb-0">
                    <li className="m-1 mb-2">
                        {roastery.name}
                    </li>
                    <li>
                        <Globe className="mx-1" key={roastery.id} fontSize="12" />
                        <a href={roastery.url}>visit website</a>
                    </li>
                    {/* <img
                        src={`${roastery.logo}`}
                        alt={roastery.name}
                    /> */}
                </ul>
            </div>
        </div>
    )
}