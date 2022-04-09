import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import styles from "./Searchbar.module.scss"
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
export const Searchbar = ({setFilterText, setFIlterGenre}) => {
  const [moreOptions, setMoreOptions] = useState(false)
  const getFilterData=(e)=>{
    setFilterText(e.target.value) 
  }
  const getFilterGenre=(e)=>{
    if(e.target.checked == true) {
      setFIlterGenre(e.target.value) 
    } else {
      setFIlterGenre('')
    }
    
  }
  return (
    <div className={styles.searchBar}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            onChange={getFilterData}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <p className={styles.moreOptions} onClick={()=> setMoreOptions(!moreOptions)}>{moreOptions == false ? <span>More options<AiOutlineArrowDown/></span>: <span>Hide options<AiOutlineArrowUp/></span>}</p>
      </div>
      
      { moreOptions == true ? 
        <div className={styles.searchOptions} >
            <h3>Genres:</h3>
          <ul>
            <li>
              <input type="checkbox" id="shooter" name="shooter" value="shooter" onChange={getFilterGenre}/>
              <label for="shooter"> Shooter</label>
            </li>
            <li>
              <input type="checkbox" id="MMORPG" name="MMORPG" value="MMORPG" onChange={getFilterGenre}/>
              <label for="MMORPG"> MMORPG</label>
            </li>
            <li>
              <input type="checkbox" id="Card game" name="Card game" value="Card game" onChange={getFilterGenre}/>
              <label for="Card game"> Card game</label>
            </li>
          </ul>
        </div>
       : ''
      }
      </div>
   
  )
}

export default Searchbar