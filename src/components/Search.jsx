import React from 'react';
import { useDispatch } from 'react-redux';
import { setResult } from "../reducers/resourceSlice";
import { setInputSearch, setIsClicked } from '../reducers/inputsearchSlice';
import { useSelector } from 'react-redux';

export default function Search() {
  const inputSearch = useSelector((state) => state.inputsearch.inputSearch); // Récupérez la variable "result" du store
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    event.preventDefault();
    dispatch(setInputSearch(event.target.value)); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setIsClicked(true));

    try {
      const response = await fetch("https://yonebi-back.vercel.app/api/resources/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      const filteredData = data.filter(r => r.title.toLowerCase().includes(inputSearch.toLowerCase()));
      console.log(filteredData);
      dispatch(setResult(filteredData)); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
      <button className="btn btn-outline-dark" type="submit" onClick={handleSubmit}>Search</button>
    </form>
  );
}
