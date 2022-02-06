import { types } from "../styles/types";

/*
    {
        uid: kmpkneje,
        name: 'Karen'
    }
*/


export const AuthReducer = (state = {}, action) =>{
    
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return{ }
    
        default:
            return state;
    }
}