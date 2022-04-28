
export const SkeletonElement = ({ className, type }) => {
    return (
        <div className={className + ' skeleton ' + type}></div>
    )
}