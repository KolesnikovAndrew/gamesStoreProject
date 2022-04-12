import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import styles from "./Searchbar.module.scss"


const genres = ['Shooter', 'MMORPG', 'Card Game']

export const Searchbar = ({setFilterText, setFIlterGenre}) => {
  const [moreOptions, setMoreOptions] = useState(false)
  const getFilterData = (e) =>{setFilterText(e.target.value)}
  const getFilterGenre = (e) =>{
    e.target.checked ? setFIlterGenre(e.target.value) : setFIlterGenre('')
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
        <p className={styles.moreOptions} onClick={()=> setMoreOptions(!moreOptions)}>
          <span>{moreOptions? <>Hide options<AiOutlineArrowUp/></> : <>More options<AiOutlineArrowDown/></>}</span>
        </p>
      </div>
      { moreOptions ? 
        <div className={styles.searchOptions} >
            <h3>Genres:</h3>
          <ul>
            {
              genres.map((genre)=>{
                return <>
                  <li>
                    <input type="checkbox" id={genre} name={genre} value={genre} onChange={getFilterGenre}/>
                    <label for={genre}> {genre}</label>
                  </li>
                </>
              })
            }
          </ul>
        </div>
       : null
      }
      </div>
  )
}

export default Searchbar