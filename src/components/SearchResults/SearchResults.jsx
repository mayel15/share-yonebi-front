import React from "react";
import Resource from "../Resource/Resource";
import { useSelector } from 'react-redux';
import Loading from "../Loading/Loading";

export default function SearchResults() {
  
  const result = Object.freeze(useSelector((state) => state.resources.result)); // Récupérez la variable "result" du store

  return (
    <div>
        {(!result.length) 
        ? <Loading url='https://i.gifer.com/XlO9.gif' /> 
        : ((result.length !== 0)
            ?(result.map((r, index) => (
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
            : <div className="text-center">Aucun résultat trouvé :| </div>)
        } 
      
    </div>
  );
}
