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

export const updatesearch=(str)=>
{
    return {
        type:ActionConstants.UPDATE_SEARCH,
        payload:str,
    }
}

export const updateResult=(arr)=>
{
    return{
        type:ActionConstants.UPDATE_RESULT,
        payload:arr,
    }
}

export const pageshows=(arr)=>{
    return {
        type:ActionConstants.PAGE_SHOWS,
        payload:arr,
    }
}