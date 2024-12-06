import React from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFilterCard } from "../../services/CardSlice";


type PropsType = {
    filter: string
}


const FilterCards = (props: PropsType) => {
  const dispatch = useAppDispatch();
  
  return (
    <div className="filter-btn">
      <Button
        className={props.filter === 'all' ? 'active-filter' : ""}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterCard('all'))}
      >
        All
      </Button>
      <Button
         className={props.filter === 'favorites' ? 'active-filter' : ""}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterCard('favorites'))}
      >
        Favorites
      </Button>
    </div>
  );
};

export default FilterCards;
