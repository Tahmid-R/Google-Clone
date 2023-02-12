import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./Search.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../DataLayer";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useDataLayerValue();

  const search = (e) => {
    e.preventDefault();

    navigate("/search");

    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
  };

  return (
    <form className="search">
      <div className="search__body">
        <SearchIcon className="search__bodyIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__hideButtons"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__hideButtons" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
