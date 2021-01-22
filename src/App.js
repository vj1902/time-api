import React, { useState, useEffect } from "react";
import axios from 'axios'
import Datatable from './Datatable'
import { Dropdown } from 'react-bootstrap'

function App() {

  const url='http://timeapi.kaaylabs.com/api/v1/project_view/'
  const [projects, setProjects]= useState(null)

  let content = null

    useEffect(()=>{
      axios.get(url)
      .then( response =>{
        setProjects(response.data)
    })
    }, [url] )

    if(projects){
      content=
      <div>
        <br/>
        <Dropdown align='right'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter Projects
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item >All</Dropdown.Item>
            <Dropdown.Item onClick=''>In Progress</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Completed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      <br/>      
        <Datatable val={projects} />
      </div>
    }
    return(
      <div>
        {content}
      </div>
    )
} 

export default App;