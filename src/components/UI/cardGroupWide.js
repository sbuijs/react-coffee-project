export const CardGroupWide = ({ children }) => {
    return (
        <div className="container mb-5">
            <div className="row row-cols-1 
                row-cols-md-2 row-cols-lg-3 g-3 g-md-4 g-lg-5">
                {children}
            </div>
        </div>
    )
}