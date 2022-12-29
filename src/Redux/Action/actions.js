import { ActionConstants } from "../Constants/actionConstants";
export const fetchdata =(data)=>
{
    return {
        type:ActionConstants.FETCH_DATA,
        payload:data,
    }
}
export const setpages=(arry)=>
{
    return {
        type:ActionConstants.PAGES_ARRAY,
        payload:arry,
    }
}
export const updatePage=(page)=>
{
    return{
        type:ActionConstants.Update_pagenumber,
        payload:page,
    }
}