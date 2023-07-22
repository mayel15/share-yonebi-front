import React from "react";
import Resource from "../Resource/Resource";

export default function Search(props) {
  return (
    <div className="content-section">
        {
            (props.result.length !== 0)
            ?(props.result
                .map((r, index) => (
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
            : <div>Aucun résultat trouvé :( </div>
        } 
      
    </div>
  );
}
