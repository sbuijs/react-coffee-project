export const SortByProperty = (array, sortProperty, ascending) => {
    //create an array with all the methods that don't return undefined
    const methodsDefined = array.filter(method => method[sortProperty] !== undefined);
    //create an array with all the methods that return undefined
    const methodsUndefined = array.filter(method => method[sortProperty] === undefined);
    //combine the arrays into one array
    const methodsFiltered = [...methodsDefined, ...methodsUndefined];

    if (ascending === true) {
        return methodsFiltered.sort(
            (method1, method2) =>
                method2[sortProperty] - method1[sortProperty]
        )
    }
    if (ascending === false) {
        return methodsFiltered.sort(
            (method1, method2) =>
                method1[sortProperty] - method2[sortProperty]
        )
    }
}

export const SortByDateProperty = (array, sortProperty, ascending) => {
    if (ascending === true) {
        return array.sort(
            (a, b) =>
                a[sortProperty].localeCompare(b[sortProperty])
        )
    }
    if (ascending === false) {
        return array.sort(
            (a, b) =>
                b[sortProperty].localeCompare(a[sortProperty])
        )
    }
}
