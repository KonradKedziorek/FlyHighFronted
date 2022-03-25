import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Layout from './Pages/Layout'

const SearchFly =()=> {


    
      
      return(
        <Layout>
           <select>
              {this.myAirport.myarray.map(data=>(
                <option title={data}>{data}</option>
              ))}
            </select>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              {this.myAirport.myarray.map(data=>(<Dropdown.Item title={data}>{data}</Dropdown.Item>))}
  
  
      </DropdownButton>
        </Layout>
      )

        
      
      }


export default SearchFly