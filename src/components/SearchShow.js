import React from 'react'
import { useDispatch, useSelector } from "react-redux";
export default function SearchShow() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  return (
    

            <div>
                <table>
                <thead>
                  <tr>
                    <th>
                      First_name&nbsp;
                      <i
                        className="fa fa-sort"
                        aria-hidden="true"
                       
                      ></i>
                    </th>
                    <th>
                      Last_name&nbsp;
                      <i
                        className="fa fa-sort"
                        aria-hidden="true"
                      
                      ></i>
                    </th>
                    <th>
                      Age&nbsp;
                      <i
                        className="fa fa-sort"
                        aria-hidden="true"
                      
                      ></i>
                    </th>
                    <th>Web</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
              {
                     
                     state.obj.sreachArr.map((ele)=>{
                     
                       return <tr key={ele.id}><th>{ele.first_name}</th>
                       <th>{ele.last_name}</th>
                       <th>{ele.age}</th>
                       <th>{<a href={ele.web}>{ele.web}</a>}</th>
                       <th>{ele.email}</th></tr>
                       
                     })
                   }
                   </tbody>
                   </table>
            </div>
          )
      


}
