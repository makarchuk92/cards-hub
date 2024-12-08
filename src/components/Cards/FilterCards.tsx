import React from "react";
import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFilterCard } from "../../services/CardSlice";





const FilterCards = () => {
  const {filter} = useAppSelector(state => state.cards)
  const dispatch = useAppDispatch();
  
  return (
    <div className="filter-btn">
      <Button
        className={filter === 'all' ? 'active-filter' : ""}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(setFilterCard('all'))}
      >
        All
      </Button>
      <Button
         className={filter === 'favorites' ? 'active-filter' : ""}
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
