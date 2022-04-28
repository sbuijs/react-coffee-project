
import { StyledSkeletonMethodCard } from "./skeletonMethodCard.style"

export const SkeletonMethodCards = ({ count }) => {
    return (
        <>
            {Array.from(Array(count).keys()).map((i) => (
                <StyledSkeletonMethodCard
                    key={i}
                />
            ))}
        </>
    )
}