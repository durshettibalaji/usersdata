import { ActionConstants } from "../Constants/actionConstants";
const initialState={
    arr:[],
}
export const userArray=(state=initialState,{type,payload})=>
{
    switch(type){
        case ActionConstants.FETCH_DATA:
            return{...state,arr:payload}
        default:
            return state;
    }
}