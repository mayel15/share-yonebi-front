import React from "react";
import Resource from "../Resource/Resource";
import { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import './Homepage.css';
import Footer from "../Footer/Footer";

import { useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';


export default function Homepage() {
  const [resources, setResources] = useState([]);
  const isClicked = useSelector((state) => state.inputsearch.isClicked);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://yonebi-back.vercel.app/api/resources/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data.sort((a, b) => a.title.localeCompare(b.title)));
        setResources(data.sort((a, b) => a.title.localeCompare(b.title)).slice(0,10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <div className="row content-section content-center">
      <Sidebar />
      <div className="welcome-section col-lg-9">
        <h2 className="text-center">Bienvenue dans yonebi. </h2>
        <p className="text-center">Votre banque de liens de ressources numériques.<br/>Accéder aux meilleures formations gratuites.</p>
        
        <h3 className="text-center"> Voici quelques unes ! </h3>
        <div className="row">
          { ((!isClicked)
            ? resources.map((r, index) => (
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
              />)) : <SearchResults />)       
          }
          
        </div>
        
      </div>
      <Footer />
    </div>
    
    </div>
  );
}
