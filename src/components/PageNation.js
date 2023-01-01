import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { pageshows, updatePage } from '../Redux/Action/actions';
import { setpages } from '../Redux/Action/actions';
export default function PageNation({data,pageHandler}) {
  const smallarr=useRef([]);
  const dispatch=useDispatch();
  const state = useSelector((state)=> state);
    let pageNumbers=[]
    for(let i=1;i<Math.ceil(state.obj.arr.length/10)+1;i++)
    {
        pageNumbers.push(i);
    }
    let small=[]
  //  small= pageNumbers.slice(0,5);
  const clickhandler=(e)=>{
    let page=Number(e.target.innerText);
    console.log(e.target.innerText);
    dispatch(updatePage(Number(e.target.innerText)));
    dispatch(setpages(state.obj.arr.slice((page*10)-10,10*page)));
  }

  const prevs=()=>{
    let start=Math.floor((state.obj.pageNumber-1)/5);
    small=pageNumbers.slice(start,start+5);   
    dispatch(pageshows(small));
    
  }

  const next=()=>{

  }
  // console.log(Math.floor(8/5)*5);
  console.log(smallarr.current)
  return (
    <div>
      <center>
      <div className="pagebutton" onClick={prevs}>&#60;</div>
        {
          
            state.obj.pageshows.map((page)=><div className='pagebutton' onClick={/*()=>pageHandler(page)*/ clickhandler} key={page}>{page}</div>)   
        }
        {/* <h1>{state.obj.pageNumber} of 50</h1> */}
        <div className="pagebutton" onClick={next}>&#62;</div>
      </center>
    </div>
  )
}
