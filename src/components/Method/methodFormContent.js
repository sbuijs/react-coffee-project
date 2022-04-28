export const MethodFormContent = ({ placeholder, onGettingInput, dataName, type, onEnter, currentValue, unit }) => {

    return (
        <>
            <div className="d-flex flex-row align-items-center m-1 mb-3">
                <input
                    autoFocus
                    className="flex-grow-1"
                    type={type}
                    data-name={dataName}
                    placeholder={placeholder}
                    defaultValue={currentValue}
                    onFocus={e => e.currentTarget.select()}
                    onChange={(e) => onGettingInput(e)}
                    onKeyDown={e => e.key === 'Enter' && onEnter(e)}
                />
                <p className="mx-2 mb-0">
                    {unit}
                </p>
            </div>
        </>
    )
}