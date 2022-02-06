import { combineReducers, createStore } from "redux";
import { AuthReducer } from "../reducers/authReducer";

const reducers = combineReducers({

    auth: AuthReducer
});

export const store = createStore(reducers);