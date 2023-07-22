import React, { useState } from "react";
import Resource from "./Resource/Resource";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);


  const handleChange = (event) => {
    event.preventDefault();
    setInputSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      setResult(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
        <button class="btn btn-outline-dark" type="submit" onClick={handleSubmit}>Search</button>
        {
          (result)
          ? (result.map((r, index) => (
                  <Resource
                    title={r.title}
                    key={r.id}
                    url={r.url}
                    authors={r.authors}
                    addedAt={r.addedAt.toString()}
                    description={r.description}
                    subject={r.subject}
                    category={r.category}
                    id={r._id}
                  />)))
          : null
        }
    </form> 
  );
}
