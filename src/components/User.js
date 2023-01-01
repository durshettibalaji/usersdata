import React, {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, setpages } from "../Redux/Action/actions";
export default function User() {
    const first = useRef(true);
  const last = useRef(true);
  const age = useRef(true);
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const sortfirstname = () => {
        if (first.current == true) {
          let arr = state.obj.pages.sort((a, b) => {
            let fa = a.first_name.toLowerCase(),
              fb = b.first_name.toLowerCase();
            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
          dispatch(setpages(arr));
          // console.log(arr,first);
          first.current = false;
        } else {
          let arr = state.obj.pages.sort((a, b) => {
            let fa = a.first_name.toLowerCase(),
              fb = b.first_name.toLowerCase();
            if (fa > fb) {
              return -1;
            }
            if (fa < fb) {
              return 1;
            }
            return 0;
          });
          dispatch(setpages(arr));
          // console.log(arr,first);
          first.current = true;
        }
      };
      const sortlastname = () => {
        if (last.current == true) {
          let arr = state.obj.pages.sort((a, b) => {
            let fa = a.last_name.toLowerCase(),
              fb = b.last_name.toLowerCase();
            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
          dispatch(setpages(arr));
          // console.log(arr,last);
          last.current = false;
        } else {
          let arr = state.obj.pages.sort((a, b) => {
            let fa = a.last_name.toLowerCase(),
              fb = b.last_name.toLowerCase();
            if (fa > fb) {
              return -1;
            }
            if (fa < fb) {
              return 1;
            }
            return 0;
          });
          dispatch(setpages(arr));
          // console.log(arr,last);
          last.current = true;
        }
      };
      const sortage = () => {
        if (age.current == true) {
          let arr = state.obj.pages.sort((a, b) => {
            return a.age - b.age;
          });
          dispatch(setpages(arr));
          // console.log(arr,first);
          age.current = false;
        } else {
          let arr = state.obj.pages.sort((a, b) => {
            return b.age - a.age;
          });
          dispatch(setpages(arr));
          // console.log(arr,first);
          age.current = true;
        }
      };
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
                onClick={sortfirstname}
              ></i>
            </th>
            <th>
              Last_name&nbsp;
              <i
                className="fa fa-sort"
                aria-hidden="true"
                onClick={sortlastname}
              ></i>
            </th>
            <th>
              Age&nbsp;
              <i
                className="fa fa-sort"
                aria-hidden="true"
                onClick={sortage}
              ></i>
            </th>
            <th>Web</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
      {
             
             state.obj.pages.map((ele)=>{
             
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
