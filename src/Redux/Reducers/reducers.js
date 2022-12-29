import { ActionConstants } from "../Constants/actionConstants";
const initialState={
    arr:[],
    pages:[],
    pageNumber:0,
}
export const userArray=(state=initialState,{type,payload})=>
{
    switch(type){
        case ActionConstants.FETCH_DATA:
            return{...state,arr:payload}
        case ActionConstants.PAGES_ARRAY:
            return{...state,pages:payload}
        case ActionConstants.Update_pagenumber:
            return{...state,pageNumber:payload}
        default:
            return state;
    }
}