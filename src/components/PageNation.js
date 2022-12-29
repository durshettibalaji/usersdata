import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from '../Redux/Action/actions';
import { setpages } from '../Redux/Action/actions';
export default function PageNation({data,pageHandler}) {
  const dispatch=useDispatch();
  const state = useSelector((state)=> state);
    let pageNumbers=[]
    for(let i=1;i<Math.ceil(state.obj.arr.length/10)+1;i++)
    {
        pageNumbers.push(i);
    }
  const clickhandler=(e)=>{
    let page=Number(e.target.innerText);
    console.log(e.target.innerText);
    dispatch(updatePage(Number(e.target.innerText)));
    dispatch(setpages(state.obj.arr.slice((page*10)-10,10*page)));
  }
  return (
    <div>
      <center>
      <div className="pagebutton">&#60;</div>
        {
            pageNumbers.map((page)=><div className='pagebutton' onClick={/*()=>pageHandler(page)*/ clickhandler} key={page}>{page}</div>)   
        }
        <h1>{state.obj.pageNumber} of 50</h1>
        <div className="pagebutton">&#62;</div>
      </center>
    </div>
  )
}
