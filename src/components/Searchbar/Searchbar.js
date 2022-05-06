import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Typography from "@material-ui/core/Typography";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Slider from "@material-ui/core/Slider";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import styles from "./Searchbar.module.scss";

const genres = ["Shooter", "MMORPG", "Card Game"];

const red = "rgb(156, 52, 52)";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: red,
      },
      track: {
        color: red,
      },
      rail: {
        color: "grey",
      },
    },
  },
});

export const Searchbar = ({
  setFilterText,
  setFIlterGenre,
  setFilterPrice,
  filterPrice,
  filterGenre,
}) => {
  const [moreOptions, setMoreOptions] = useState(false);

  const getFilterData = (e) => {
    setFilterText(e.target.value);
  };
  const getFilterGenre = (e) => {
    e.target.checked
      ? setFIlterGenre((filterGenre) => [
          ...filterGenre,
          e.target.value.toLowerCase(),
        ])
      : setFIlterGenre(
          filterGenre.filter((genre) => genre != e.target.value.toLowerCase())
        );
  };

  const getFilterPrice = (e, newValue) => {
    setFilterPrice(newValue);
  };

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
        <p
          className={styles.moreOptions}
          onClick={() => setMoreOptions(!moreOptions)}
        >
          <span>
            {moreOptions ? (
              <>
                Hide options
                <AiOutlineArrowUp />
              </>
            ) : (
              <>
                More options
                <AiOutlineArrowDown />
              </>
            )}
          </span>
        </p>
      </div>
      {moreOptions ? (
        <div className={styles.searchOptions}>
          <h3>Genres</h3>
          <ul>
            {genres.map((genre) => {
              return (
                <li>
                  <input
                    type="checkbox"
                    id={genre}
                    name="genre"
                    value={genre}
                    onChange={getFilterGenre}
                  />
                  <label for={genre}> {genre}</label>
                </li>
              );
            })}
          </ul>
          <h3>Price</h3>
          <div>
            <Typography>Select Price Range:</Typography>
            <ThemeProvider theme={muiTheme}>
              <Slider
                onChange={getFilterPrice}
                value={filterPrice}
                valueLabelDisplay="auto"
                min={0}
                max={10}
              />
            </ThemeProvider>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
