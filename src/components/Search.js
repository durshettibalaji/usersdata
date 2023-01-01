import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { updateResult, updatesearch } from '../Redux/Action/actions';

export default function Search() {
    const dispatch=useDispatch();
    const state = useSelector((state) => state);
    const changeHandler=(e)=>
    {
        // console.log(e.target.value);
        dispatch(updatesearch(e.target.value));
     let arr=   state.obj.arr.filter((ele)=>
        {
          if(ele.first_name.toLowerCase().includes(e.target.value.toLowerCase()) || ele.last_name.toLowerCase().includes(e.target.value.toLowerCase()) )
          return ele;
        }
        )
        console.log(arr);
        dispatch(updateResult(arr));   
    }
  return (
    <>
      <input type="text"  placeholder='Enter name' className='inputsearch' onChange={changeHandler} value={state.obj.search}/><i className="fa-solid fa-magnifying-glass search"></i>
    </>
  )
}
