import React from "react";
import './Subject.css'

export default function Subject(props) {
    const handleDelete = async () => {
        await fetch(`https://yonebi-back.vercel.app/api/subjects/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/admin/subjects'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="sub-cat-card col-lg-5">
            <h3>{props.name}</h3>
            <div className="icons">
                <button
                    className="icon-card"
                    onClick={handleDelete}
                >
                    <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}