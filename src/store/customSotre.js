import reducer from './reducer'

function createStore(reducer) {
    let state;
    let listeners = [];

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        // Call the reducer to get the new state
        state = reducer(state, action);
        // Notify the subscribers <- subscribers are UI components which are intersted in the changes
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

export default createStore(reducer);