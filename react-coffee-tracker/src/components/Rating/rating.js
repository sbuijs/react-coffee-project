import { Heart, HeartHalf, HeartFill } from "react-bootstrap-icons"
import { StyledButton } from '../UI/button/button.style'
import { useMemo } from "react"

export const Rating = ({ className, rating, iconSize }) => {

    const normalisedRating = useMemo(() => {
        if (!rating) return null;
        return Math.round(rating * 2) / 2;
    }, [rating]);

    const hearts = useMemo(() => {
        const hearts = []; // -> ["full", "full", "half", "empty", "empty"]
        for (let i = 0; i < 5; i++) {
            if (normalisedRating >= i + 1) {
                hearts[i] = "full";
            } else if (normalisedRating <= i) {
                hearts[i] = "empty";
            } else {
                hearts[i] = "half";
            }
        }
        return hearts;
    }, [rating]);

    // if (!normalisedRating) {
    //     return <StyledButton secondary buttonLabel="Rate it!" className="" />;
    // }
    return (
        <>
            <div className={className}>
                {hearts.map((heart, index) => {
                    if (heart === "full") {
                        return <HeartFill key={index} className="m-1" fontSize={iconSize} />;
                    }
                    if (heart === "half") {
                        return <HeartHalf key={index} className="m-1" fontSize={iconSize} />;
                    }
                    return <Heart key={index} className="m-1" fontSize={iconSize} />;
                })}
            </div>
        </>
    )
}