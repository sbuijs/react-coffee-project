import { configureStore } from "@reduxjs/toolkit";
import coffeesReducer from "../features/coffee"
import methodReducer from "../features/method"
import roasteryReducer from "../features/roastery"

const store = configureStore({
    //collection of reducers ----
    //reducer is a function that takes in information about the current
    //states (previous value and action that you want to perform on that state)
    //and returns back the value of that state
    reducer: {
        coffee: coffeesReducer,
        method: methodReducer,
        roastery: roasteryReducer,
    }
})

export default store;