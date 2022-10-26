import { useState, useRef } from "react";
import "./App.css";
const App = () => {
  const [data, setdata] = useState([]);
  const [fdata, setfdata] = useState();
  const name = useRef();
  const submitdata = async () => {
    let d1 = name.current.value;
    let dd = d1.slice(8, 10);
    let mm = d1.slice(5, 7);
    let yy = d1.slice(0, 4);
    let date = `${dd}-${mm}-${yy}`;
    console.log(date);
    let apiurl = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${fdata}&date=${date}`
    );
    let cast = await apiurl.json();
    console.log(cast);
    setdata(cast.sessions);
  };
  return (
    <>
      <div className="title">
        <h1>Cowin District Master</h1>
      </div>
      <div className="form">
        <input
          onChange={(v) => {
            setfdata(v.target.value);
          }}
          type="number"
          placeholder="enter district id"
        />
        <br />
        <input type="date" ref={name} />
        <button onClick={submitdata}>Submit</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Center_Id</th>
              {data.map((val, index) => {
                return <th key={index}>{val.center_id}</th>;
              })}
            </tr>
            <tr>
              <td>Name</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.name}</th>;
              })}
            </tr>
            <tr>
              <td>Address</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.address}</th>;
              })}
            </tr>
            <tr>
              <td>State_name</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.state_name}</th>;
              })}
            </tr>
            <tr>
              <td>district_name</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.district_name}</th>;
              })}
            </tr>
            <tr>
              <td>Block_name</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.block_name}</th>;
              })}
            </tr>
            <tr>
              <td>Pincode</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.pincode}</th>;
              })}
            </tr>
            <tr>
              <td>From</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.from}</th>;
              })}
            </tr>
            <tr>
              <td>To</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.to}</th>;
              })}
            </tr>
            <tr>
              <td>Lat</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.lat}</th>;
              })}
            </tr>
            <tr>
              <td>Long</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.long}</th>;
              })}
            </tr>
            <tr>
              <td>Fee_type</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.fee_type}</th>;
              })}
            </tr>
            <tr>
              <td>Fee</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.fee}</th>;
              })}
            </tr>
            <tr>
              <td>To</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.to}</th>;
              })}
            </tr>
            <tr>
              <td>Date</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.date}</th>;
              })}
            </tr>
            <tr>
              <td>vaccine</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.vaccine}</th>;
              })}
            </tr>
            <tr>
              <td>Available_capacity</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.available_capacity}</th>;
              })}
            </tr>
            <tr>
              <td>A.c.dose1</td>
              {data.map((val) => {
                return (
                  <th key={val.center_id}>{val.available_capacity_dose1}</th>
                );
              })}
            </tr>
            <tr>
              <td>A.c.dose2</td>
              {data.map((val) => {
                return (
                  <th key={val.center_id}>{val.available_capacity_dose2}</th>
                );
              })}
            </tr>
            <tr>
              <td>Max_age_limit</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.max_age_limit}</th>;
              })}
            </tr>
            <tr>
              <td>Min_age_limit</td>
              {data.map((val) => {
                return <th key={val.center_id}>{val.min_age_limit}</th>;
              })}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default App;
