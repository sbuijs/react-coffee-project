
export const getNormalisedRating = (coffee) => {
    if (coffee == null) return null;
    return Math.round(coffee.rating * 2) / 2;
}



// const normalisedRating = useMemo(() => getNormalisedRating(currentCoffee), [currentCoffee])

