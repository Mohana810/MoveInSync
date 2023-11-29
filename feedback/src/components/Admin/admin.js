import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import Box from "./box.js";
import "./Form1.css"
import { BsSearch } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import "./AllFeedback.css"
import { Navigate } from 'react-router-dom';
import firebaseConfig from "../config.js";


const AllFeedback = ({ data }) => {
    const { currentUser } = useContext(AuthContext);
    
    const [loading, setLoading] = useState(true);
    const [Alldata, setAlldata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    let [dropdown1Value, setDropdown1Value] = useState("All");
    useEffect(() => {
        const db = getFirestore();
        const tempArray = [];
        if (currentUser) {
          const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "AllFormData"));
            querySnapshot.forEach((doc) => {
              // console.log("Hi");
              // console.log(`${doc.id} =>`, doc.data());
              // setDataElements(doc.data());
              tempArray.push(doc.data());
            });
            setLoading(false);
          };
          fetchData();
          setAlldata(tempArray);
          setFilteredData(tempArray);
        }
        // console.log(currentUser);
        // console.log(AuthContext);
      }, [currentUser]);
      if (!currentUser) {
        return <Navigate to="/" />;
      }else if(!currentUser.email.endsWith('@moveinsync.com')){
        return <Navigate to="/" />;
      }
      console.log(Alldata);
      const handleDropdown1Change = (event) => {
        // dropdown2Value = event.target.value;
        setDropdown1Value(event.target.value);
        console.log(dropdown1Value);
      };
      const handleSearch = () => {
        console.log("oki");
        console.log(dropdown1Value);
        const filteredResults = Alldata.filter((item) => {
          const formMatch =
            dropdown1Value === "All" || item.formid === dropdown1Value;
    
          console.log(formMatch);
          return formMatch 
        });
        console.log(filteredResults);
        setFilteredData(filteredResults);
        console.log(filteredData);
      };
    
      const handleCancel = () => {
        // Clear the dropdown values
        // setDropdown1Value("");
        // setDropdown2Value("");
        // setDropdown3Value("");
        // setDropdown4Value("");
        dropdown1Value = "All";
        window.location.reload();
      };
      let boxes;
      boxes = filteredData.map((box) => (
        <Box q1={box.q1} q2={box.q2} q3={box.q3} q4={box.q4} a1={box.a1} a2={box.a2} a3={box.a3} a4={box.a4} userid = {box.userid} q5 = {box.q5} a5 = {box.a5}/>
      ));
      let aggregate1 = 0;
      filteredData.forEach(element => {
        aggregate1 = (aggregate1 + parseFloat(element.a4))
      });
      aggregate1 = Math.round((aggregate1/filteredData.length) * 10) / 10;
      let aggregate2 = 0;
      filteredData.forEach(element => {
        aggregate2 = (aggregate2 + parseFloat(element.a5))
      });
      aggregate2 = Math.round((aggregate2/filteredData.length) * 10) / 10;
  return (
    <div className='AllData'>
      <h1>AllData</h1>
      <div className="col-md-auto filterSection">
            <div className="midHeading">FILTERS</div>
            <div>
              <div className="filter-form">
                <select
                  className="filter-dropdown"
                  value={dropdown1Value}
                  onChange={handleDropdown1Change}
                >
                  <option value="All">FormId</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div className="filter-buttons">
                  <button className="searchBtn" onClick={handleSearch}>
                    <BsSearch />
                  </button>
                  <button className="cancelBtn" onClick={handleCancel}>
                    <MdOutlineCancel /> 
                  </button>
                </div>
              </div>
            </div>
            <div className="Heading1">aggregate rating of the trip (out of 10): - {aggregate1}</div>
            <div className="Heading2">Overall rating of driver (out of 10): - {aggregate2}</div>
            <Link to="/qupload" className="but3">Qustomize the form</Link>
            <button
            className="but3"
            onClick={() => firebaseConfig.auth().signOut()}
          >
            Log out
          </button>
          </div>
      <div className="col bottomSection">{boxes}</div>
    </div>
  ); 
};

export default AllFeedback;
