// import store from "./store";
// import { bugAdded, bugRemoved, bugResolved } from "./actions";

// const ubnsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));
// console.log(store.getState());

// store.dispatch(bugResolved(1));
// console.log(store.getState())

// ubnsubscribe();
// store.dispatch(bugRemoved(1));
// console.log(store.getState());

// learning functional programming
// import { compose, pipe } from "lodash/fp";

// const input = "  JavaScript  ";

// const trim = (str) => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// // const result = wrapInDiv(toLowerCase(trim(input)));

// // Simplify the above function to below one
// // The order is right first, left last
// const transform = compose(wrap('div'), toLowerCase, trim);
// transform(input);

// // if would like to read the code from left to right
// const transform2 = pipe(trim, toLowerCase, wrap('div'));
// transform2(input);
// console.log(transform2(input));

// import store from "./customSotre";
// // store.state = 1;
// // console.log(store.state)
// store.state = 1
// console.log(store.getState())

// import store from "./customSotre";
import configStore from "./store/configStore";
import * as actions from "./store/bugs";

const store = configStore();

store.subscribe(() => {
  console.log("Store change")
})

store.dispatch(actions.bugAdded({ description: "Bug 1" }))
store.dispatch(actions.bugAdded({ description: "Bug 2" }))
store.dispatch(actions.bugAdded({ description: "Bug 3" }))
store.dispatch(actions.bugResolved({ id: 1 }))
console.log(store.getState())
