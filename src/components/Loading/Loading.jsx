import React from "react"
import './Loading.css'

export default function Loading (props){
    return(
        <div className="loading-img-container">
            <img className="loading-img" src={props.url} alt='loading-img'></img>
        </div>
    )
} 