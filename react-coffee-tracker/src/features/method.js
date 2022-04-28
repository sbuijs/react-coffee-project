import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const sleep = (timeMs) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeMs);
    })
}

export const getMethods = createAsyncThunk(
    "methods/getMethods",
    async (dispatch, getState) => {
        await sleep(1000);
        return await
            fetch('https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27method%27]')
                .then(
                    (res) => res.json()
                )
    }
);


// https://www.youtube.com/watch?v=uRqVM2mG7ms
// https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27method%27%20%26%26%20_id%20==%20%27082b8b11-2d1b-4316-a326-6d934c816a53%27]
// spatie: %20
// quote: %27
// &: %26


// const raw = decodeURIComponent("*[_type%20==%20%27method%27%20%26%26%20_id%20==%20%27082b8b11-2d1b-4316-a326-6d934c816a53%27]");
// "*[_type == 'method' && _id == '082b8b11-2d1b-4316-a326-6d934c816a53']"
// const encoded = encodeURIComponent(raw)

// export const deleteMethod = createAsyncThunk(
//     "method/deleteMethod",
//     async ({ id }) => {
//         return await
//             fetch(`https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27method%27%20%26%26%20_id%20==%20%27082b8b11-2d1b-4316-a326-6d934c816a53%27]`, {
//                 // fetch(`https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27method%27%20%26%26%20_id%20==%20%27${id}%27]`, {
//                 method: "DELETE",
//             })
//                 .then(
//                     (res) => res.json()
//                 );
//     }
// );


// export const createMethod = createAsyncThunk(
//     "method/createMethod",
//     async ({ values }) => {
//         return await
//             fetch(`https://coovmty8.api.sanity.io/v2021-06-07/data/mutate/production`, {
//                 // fetch(`https://coovmty8.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%27method%27%20%26%26%20_id%20==%20%27${id}%27]`, {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-type": "appliction/json"
//                 },
//                 body: JSON.stringify({
//                     title: values.title,
//                     body: values.body
//                 })

//             })
//                 .then(
//                     (res) => res.json()
//                 );
//     }
// );

const methodsSlice = createSlice({
    name: "method",
    initialState: {
        methods: [],
        status: null,
    },
    extraReducers: {
        [getMethods.pending]: (state, action) => {
            state.status = "loading"
        },
        [getMethods.fulfilled]: (state, action) => {
            state.status = "success"
            state.methods = action.payload.result
        },
        [getMethods.rejected]: (state, action) => {
            state.status = "failed"
        },
        // [deleteMethod.pending]: (state, action) => {
        //     state.status = "loading"
        // },
        // [deleteMethod.fulfilled]: (state, action) => {
        //     state.status = "success"
        //     state.methods = action.payload.result
        // },
        // [deleteMethod.rejected]: (state, action) => {
        //     state.status = "failed"
        // },
        // [createMethod.pending]: (state, action) => {
        //     state.status = "loading"
        // },
        // [createMethod.fulfilled]: (state, action) => {
        //     state.status = "success"
        //     state.methods = action.payload.result
        // },
        // [createMethod.rejected]: (state, action) => {
        //     state.status = "failed"
        // },
    },
});

export default methodsSlice.reducer;