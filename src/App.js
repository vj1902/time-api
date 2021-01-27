import React, { useState, useEffect } from "react";
import axios from 'axios'
import Datatable from './Datatable'

function App() {

  const [projects, setProjects]= useState([])
  const [q,setQ]= useState("")
 
  useEffect(()=>{
    axios
      .get('http://timeapi.kaaylabs.com/api/v1/project_view/')
      .then( response =>{
        setProjects(response.data.data)
      })
  },[])

  function filt(rows) {
    if(q==="All"){
      return rows
    }
    else{
      return rows.filter((row)=>row.status.indexOf(q)>-1)
    }
  }

  return (

    <div>

      <br/>
      <select onChange={(e)=>setQ(e.target.value)}>
        <option value="All">All</option>
        {projects.map(st => st.status).filter((v, i, a) => a.indexOf(v) === i).map(item => (
          <option key={item} value={item}>{item}</option>))}
      </select>
      
      <div>
        <br/>
        <Datatable val={filt(projects)} />
      </div>
      
    </div>
  )
} 

export default App;