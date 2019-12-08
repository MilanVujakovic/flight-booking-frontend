import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import data from "./reducers/dataReducers";
import user from "./reducers/userReducers";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: user,
    data: data
});

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;