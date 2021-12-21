import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        // action => action handler
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }
    }
})

// Action types
// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// // Action creaters
// export const bugAdded = createAction("bugAdded")
// export const bugRemoved = createAction("bugRemoved")
// export const bugResolved = createAction("bugResolved")

// Reducer
// let lastId = 0;

// export default createReducer([], {
//     // key: value
//     // actions: functions (event => event handler)
//     [bugAdded.type]: (state, action) => {
//         state.push({
//             id: ++lastId,
//             description: action.payload.description,
//             resolved: false
//         })
//     },
//     [bugResolved.type]: (bugs, action) => {
//         const index = bugs.findIndex(bug => bug.id === action.payload.id);
//         bugs[index].resolved = true;
//     }
// })

export const { bugAdded, bugResolved } = slice.actions
export default slice.reducer;