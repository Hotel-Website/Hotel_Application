import React, { useEffect, useState } from "react";
import HotelHomepage from "./home.jsx";
function App(){
  const [data,setData]=useState([])
  const [categoryData, setCategoryData] = useState([]);
  useEffect(()=>{
    fetch ('http://localhost:8081/user')
    // 
    .then(res =>res.json())
    .then(data=> setData(data))
    .then(err => console.log(err));

    fetch ('http://localhost:8081/category')
    .then((res) => res.json())
    .then((data) => setCategoryData(data))
    .catch((err) => console.log(err));


  },[])
  return (
    <><div style={{ padding: "20x" }}>
      <div> <HotelHomepage/></div>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Password</th>
          <th></th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.name}</td>

              <td>{d.email}</td>

              <td>{d.phone}</td>

              <td>{d.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div><div>
        <h2>Category Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Available</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((category, i) => (
              <tr key={i}>
                <td>{category.name}</td>
                <td>{category.type}</td>
                <td>{category.cost}</td>
                <td>{category.available}</td>
                <td>{category.img}</td>
                <td>{category.dec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>

  )
}


export default App