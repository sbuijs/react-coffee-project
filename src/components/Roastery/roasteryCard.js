export const RoasteryCard = ({ className, roastery }) => {
    return (
        <div className={className + ' col card-group position-relative'}>
            <div className="card__body">
                <ul className="list-unstyled">
                    <li>
                        {roastery.name}
                    </li>
                    <li>
                        <a href={roastery.url}>{roastery.url}</a>
                    </li>
                    <img
                        src={`${roastery.logo}`}
                        alt={roastery.name}
                    />
                </ul>
            </div>
        </div>
    )
}