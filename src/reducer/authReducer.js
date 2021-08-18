import {TYPES} from "../Types/types";


export const authReducer = (state={}, action)=>{

    switch (action.type){
        case TYPES.LOGIN:
            return{
                uid: action.payload.uid,
                displayName: action.payload.displayName
            }
        case TYPES.LOGOUT:
            return {}


        default:
            return state

    }


}

