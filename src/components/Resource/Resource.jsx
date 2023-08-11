import { React, useEffect, useState } from "react";
import './Resource.css'

export default function Resource(props) {
    const [isClickedToEdit, setIsClickedToEdit] = useState(false);
    const [temoinS, setTemoinS] = useState(false)
    const [temoinC, setTemoinC] = useState(false)
    const [categories, setCategories] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [formData, setFormData] = useState({
        title: props.title,
        url: props.url,
        description: props.description,
        authors: props.authors,
        subject: props.subject,
        category: props.category,
        passwordSecurity: ""
    });

    const handleDelete = async () => {

        await fetch(`https://yonebi-back.vercel.app/api/resources/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.href = '/admin/home'
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleEditButton = async () => {
        (isClickedToEdit)
            ? setIsClickedToEdit(false)
            : setIsClickedToEdit(true)
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.title === ""
            || formData.url === ""
            || formData.description === ""
            || formData.authors === ""
            || formData.subject === ""
            || formData.category === "") {
            alert('Au moins un champ du formulaire est vide. :(')
        } else {
            await fetch(`https://yonebi-back.vercel.app/api/resources/${props.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    window.location.href = '/admin/home'
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const toggleS = () => {
        (temoinS)
            ? setTemoinS(false)
            : setTemoinS(true)
    }

    const toggleC = () => {
        (temoinC)
            ? setTemoinC(false)
            : setTemoinC(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch('https://yonebi-back.vercel.app/api/categories', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);

                const subjectsResponse = await fetch('https://yonebi-back.vercel.app/api/subjects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const subjectsData = await subjectsResponse.json();
                setSubjects(subjectsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="resource-card col-lg-12">
            <h3> <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a></h3>
            <div>{props.description}</div>
            <div>Auteurs/Sources : {props.authors}</div>
            <div>{props.subject + " > " + props.category}</div>
            <p>{props.addedAt}</p>
            {
                (props.view === 'admin')
                    ? (
                        <div className="icons">
                            <button
                                className="icon-card"
                                onClick={handleEditButton}
                            >
                                {(isClickedToEdit) ? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-pen"></i>}
                                
                            </button>
                            <button
                                className="icon-card"
                                onClick={handleDelete}            
                            >
                                <i className="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        </div>
                    )
                    : null
            }
            {
                (isClickedToEdit && props.view === 'admin')
                    ? (
                        <div className='text-center'>
                            <h3>Modification</h3>
                            <button
                                onClick={toggleS}
                            >
                                {(!temoinS)
                                    ? <div>Ajouter un sujet</div>
                                    : <div>Sélectionner un sujet</div>
                                }
                            </button>
                            <button
                                onClick={toggleC}
                            >
                                {(!temoinS)
                                    ? <div>Ajouter une catégorie</div>
                                    : <div>Sélectionner une catégorie</div>
                                }
                            </button>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="title">Titre</label>
                                    <input type='text' name="title" value={formData.title} placeholder="Titre" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="url" >Lien</label>
                                    <input type='text' name="url" value={formData.url} placeholder="url" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        placeholder="Description"
                                        onChange={handleChange}
                                        rows={10}                                    />
                                </div>
                                <div>
                                    <label htmlFor="authors">Auteurs</label>
                                    <input type='text' name="authors" value={formData.authors} placeholder="Auteurs / Sources" onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="subject">Subject</label>

                                    {
                                        (temoinS)
                                            ? (
                                                <input type='text' name="subject" value={formData.subject} placeholder="Sujet" onChange={handleChange} />
                                            )
                                            : (
                                                <select value={formData.subject} name="subject" onChange={handleChange}>
                                                    <option value="">Select an option</option>
                                                    {subjects.map((s) => {
                                                        return (<option value={s.name} > {s.name} </option>)
                                                    })}
                                                </select>
                                            )

                                    }</div>

                                <div>
                                    <label htmlFor="category">Catégorie</label>

                                    {
                                        (temoinC)
                                            ? (
                                                <input type="text" name="category" value={formData.category} placeholder="Catégorie" onChange={handleChange} />
                                            )
                                            : (
                                                <select value={formData.category} name="category" onChange={handleChange}>
                                                    <option value="">Select an option</option>
                                                    {categories.map((c) => {
                                                        return (<option value={c.name}> {c.name} </option>)
                                                    })}
                                                </select>
                                            )

                                    }
                                </div>

                                <button
                                    type="submit"
                                >
                                    Modifier
                                </button>
                            </form>
                        </div>
                    )
                    : null
            }



        </div>
    )
}