import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//endpoint that returns a list of coffees
export const getCoffees = createAsyncThunk(
    "coffees/getCoffees",
    async (dispatch, getState) => {
        return await
            fetch('https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27coffee%27]')
                .then(
                    (res) => res.json()
                );
    }
);

const coffeesSlice = createSlice({
    name: "coffee",
    initialState: {
        coffees: [],
        status: null,
    },
    extraReducers: {
        [getCoffees.pending]: (state, action) => {
            state.status = "loading"
        },
        [getCoffees.fulfilled]: (state, action) => {
            state.status = "success"
            state.coffees = action.payload.result
        },
        [getCoffees.rejected]: (state, action) => {
            state.status = "failed"
        },
    },
});


export default coffeesSlice.reducer;