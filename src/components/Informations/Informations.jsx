import React from "react";
import './Informations.css'
import Footer from "../Footer/Footer";
import HeaderNav from "../Header/HeaderNav";

export default function Informations() {
    return (
        <div>
            <HeaderNav />
            <div className="content-section info-section">
                <h3 className="text-center">share.yonebi. , c'est quoi ❓</h3>
                <div className="texte-informations">
                    Bienvenue sur <strong>share.yonebi.</strong> ! 👋
                    <br /><br />Nous sommes ravis de vous accueillir sur notre plateforme dédiée à l'apprentissage et à l'accès aux connaissances. <strong>share.yonebi.</strong> est bien plus qu'une simple banque de liens : c'est une bibliothèque numérique qui regroupe une vaste sélection de ressources de formation gratuites et accessibles à tous. 😇
                    <br /><br />Notre mission est de rendre l'éducation et le développement personnel accessibles à chacun, peu importe son niveau de compétence ou sa localisation géographique. Que vous soyez un débutant curieux de découvrir de nouveaux sujets ou un expert en quête d'approfondissement, <strong>share.yonebi.</strong> est là pour vous accompagner dans votre parcours d'apprentissage. 👨‍💻
                    <br /><br />Les ressources disponibles sur notre plateforme couvrent un large éventail de domaines, allant de l'informatique et du développement (web, mobile, desktop, réseaux, cybersécurité, intelligence artificielle, etc.) aux formations financières, en passant par la comptabilité, la littérature, la cuisine et bien plus encore. Qu'il s'agisse de compétences techniques ("hard skills") ou de compétences humaines ("soft skills"), <strong>share.yonebi.</strong> offre une variété de contenus pour répondre à vos besoins spécifiques. 👌
                    <br /><br />Notre engagement envers l'open source et la gratuité signifie que chacun peut accéder librement aux ressources de notre plateforme et les utiliser pour son auto-apprentissage, sa formation continue ou même pour enseigner à d'autres. Nous croyons en la puissance de la collaboration et du partage des connaissances pour construire un monde meilleur et plus éclairé. 🆓🫡
                    <br /><br />Merci de faire partie de notre communauté d'apprentissage ! 👩🏾‍🎓
                    <br /><br />L'équipe de <strong>share.yonebi.</strong> 😉
                </div>
                <Footer />
            </div>
        </div>


    )
}