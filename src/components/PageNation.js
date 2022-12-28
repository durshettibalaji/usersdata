import React from 'react'

export default function PageNation({data,pageHandler}) {
    let pageNumbers=[]
    for(let i=1;i<Math.ceil(data.length/10)+1;i++)
    {
        pageNumbers.push(i);
    }
  return (
    <div>
      <center>
      <div className="pagebutton">&#60;</div>
        {
            pageNumbers.map(page=><div className='pagebutton' onClick={()=>pageHandler(page)} key={page}>{page}</div>)
        }
        <div className="pagebutton">&#62;</div>
      </center>
    </div>
  )
}
