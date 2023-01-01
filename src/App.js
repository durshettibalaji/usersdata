// import logo from './logo.svg';
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import PageNation from "./components/PageNation";
import Search from "./components/Search";
import SearchShow from "./components/SearchShow";
import User from "./components/User";
import { fetchdata, setpages } from "./Redux/Action/actions";

function App() {
  // let first=true;
  
  // let last=true;
  // let age=true;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [userArray, setuserArray] = useState([]);
  const [userData, setuserDate] = useState([]);
  const fetchUsers = async () => {
    const response = await axios
      .get(
        "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
      )
      .then((data) => {
        dispatch(fetchdata(data.data));
        dispatch(setpages(data.data.slice(0, 10)));
        // console.log(data.data)
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const pageHandler = (page) => {
    setuserDate(userArray.slice(page * 10 - 10, 10 * page));
  };
  // const sortfun=(var)=>
  // {
  // let arr=  state.obj.pages.sort((a, b) => {
  //     let fa = a.var.toLowerCase(),
  //         fb = b.var.toLowerCase();
  //     if (fa < fb) {
  //         return -1;
  //     }
  //     if (fa > fb) {
  //         return 1;
  //     }
  //     return 0;
  // });
  //   console.log(arr);
  // }
 
  // console.log(state.obj.pages);
  const renders = () => {};
  return (
    <div className="App">
      <h2>User</h2>
      <Search />
     
          {(() => {
            if (state.obj.search == "") 
            {
              return <User/>
            }
            else{
              return <SearchShow/>
            }

            return null;
          })()}
      <PageNation data={userArray} pageHandler={pageHandler} />
    </div>
  );
}
export default App;
