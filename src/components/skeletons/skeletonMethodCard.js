import { StyledSkeletonElement } from "./skeletonElements.style"
import { StyledShimmer } from './Shimmer.style'

export const SkeletonMethodCard = ({ className }) => {
    return (
        <div className={className + ' skeleton-wrapper'}>
            <div className="skeleton-card">
                <StyledSkeletonElement className="" type="title" />
                <StyledSkeletonElement className="" type="item" />
                <StyledSkeletonElement className="" type="item" />
                <StyledSkeletonElement className="" type="item" />
                <StyledShimmer />
            </div>
        </div>
    )
}