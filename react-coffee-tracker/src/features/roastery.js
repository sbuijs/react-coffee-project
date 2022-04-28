import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRoasteries = createAsyncThunk(
    "roasteries/getRoasteries",
    async (dispatch, getState) => {
        return await
            fetch
                ('https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27roastery%27]')
                .then(
                    (res) => res.json()
                );
    }
);


const roasteriesSlice = createSlice({
    name: "roastery",
    initialState: {
        roasteries: [],
        status: null,
    },
    extraReducers: {
        [getRoasteries.pending]: (state, action) => {
            state.status = "loading"
        },
        [getRoasteries.fulfilled]: (state, action) => {
            state.status = "success"
            state.roasteries = action.payload.result
        },
        [getRoasteries.rejected]: (state, action) => {
            state.status = "failed"
        },
    },
});

export default roasteriesSlice.reducer;