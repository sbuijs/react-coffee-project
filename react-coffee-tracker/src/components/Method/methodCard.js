import { Rating } from '../Rating/rating'
import { useEffect, useState } from 'react';
export const MethodCard = ({ className, method, key }) => {

    const [dateFormatted, setDateFormatted] = useState()

    useEffect(() => {
        let slicedDate = {
            year: method._createdAt.slice(2, 4),
            month: method._createdAt.slice(5, 7),
            day: method._createdAt.slice(8, 10),
            time: method._createdAt.slice(11, 19)
        };
        setDateFormatted(slicedDate)
    }, [method._createdAt])


    return (
        <div className={className + ' col card-group position-relative'}>
            <div className="card__body d-flex flex-column 
            justify-content-between w-100">

                <div className="d-flex flex-row justify-content-between mb-3">
                    <div className="data">
                        {dateFormatted?.day}/
                        {dateFormatted?.month}/
                        {dateFormatted?.year}
                    </div>
                    <Rating
                        rating={method.rating}
                        iconSize="14"
                    />
                </div>
                <div className="card__body">
                    <div className="card__item d-flex 
                    flex-row justify-content-between">
                        <div className="title">
                            Coffee beans
                        </div>
                        <div className="data">
                            <strong>
                                {method.bean_weight}
                            </strong>
                            <span>gram</span>
                        </div>
                    </div>
                    <div className="card__item d-flex 
                    flex-row justify-content-between">
                        <div className="title">
                            Water temperature
                        </div>
                        <div className="data">
                            <strong>{method.temperature}
                            </strong>
                            <span>degr</span>
                        </div>
                    </div>
                    <div className="card__item d-flex 
                    flex-row justify-content-between">
                        <div className="title">
                            Water weight
                        </div>
                        <div className="data">
                            <strong>
                                {method.water_weight}
                            </strong>
                            <span>gram</span>
                        </div>
                    </div>
                    <div className="card__item d-flex 
                    flex-row justify-content-between">
                        <div className="title">
                            Extraction
                        </div>
                        <div className="data">
                            <strong>
                                {method.extraction}
                            </strong>
                            <span>sec.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
