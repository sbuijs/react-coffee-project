import { useMemo } from "react";
export const useNormalisedRating = (coffee) => {
    return useMemo(() => {
        if (coffee == null) return null;
        return Math.round(coffee.rating * 2) / 2;
    }, [coffee])
}
