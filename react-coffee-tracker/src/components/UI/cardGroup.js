export const CardGroup = ({ children }) => {
    return (
        <div className="container mb-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                {children}
            </div>
        </div>
    )
}