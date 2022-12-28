import { ActionConstants } from "../Constants/actionConstants";
export const fetchdata =(data)=>
{
    return {
        type:ActionConstants.FETCH_DATA,
        payload:data,
    }
}