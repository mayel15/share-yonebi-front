import { React, useState, useEffect } from "react";
import Subject from "../Subject/Subject";
import './Subjects.css'
import GestionButtons from "../GestionButtons/GestionButtons";
import Loading from "../Loading/Loading";
import HeaderNav from "../Header/HeaderNav";

export default function Subjects() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const getSubjects = async () => {
            try {
                const response = await fetch("https://yonebi-back.vercel.app/api/subjects/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                console.log(data.sort((a, b) => a.name.localeCompare(b.name)));
                setSubjects(data.sort((a, b) => a.name.localeCompare(b.name)));
            } catch (error) {
                console.error(error);
            }
        };

        getSubjects();
    }, []);

    return (
        <div>
            <HeaderNav />
            <div className="content-section ">
                <GestionButtons />
                <h3 className="text-center col-lg-12 content-center">Gérer les sujets</h3>
                <div className="content-center row">

                    {(!subjects.length) ? <Loading url='https://i.gifer.com/XlO9.gif' /> :
                        subjects.map((s, index) => (
                            <Subject
                                key={s.id}
                                name={s.name}
                                id={s._id}
                            />)
                        )
                    }
                </div>
            </div>
        </div>

    )
}