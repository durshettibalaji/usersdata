import { ActionConstants } from "../Constants/actionConstants";
const initialState={
    arr:[],
    pages:[],
    pageNumber:0,
    search:"",
    sreachArr:[],
    pageshows:[],
}
export const userArray=(state=initialState,{type,payload})=>
{
    switch(type){
        case ActionConstants.FETCH_DATA:
            return{...state,arr:payload}
        case ActionConstants.PAGES_ARRAY:
            return{...state,pages:payload}
        case ActionConstants.Update_pagenumber:
            return{...state,pageNumber:payload,search:""}
        case ActionConstants.UPDATE_SEARCH:
            return{...state,search:payload}
        case ActionConstants.UPDATE_RESULT:
            return{...state,sreachArr:payload}
        case ActionConstants.PAGE_SHOWS:
            return{...state,pageshows:payload}
        default:
            return state;
    }
}