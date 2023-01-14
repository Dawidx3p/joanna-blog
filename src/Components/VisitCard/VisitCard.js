import './VisitCard.scss'
import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";

export default function VisitCard(){
    const navigate = useNavigate();
    return(
        <header>
                <img src="../imgs/profile/profile.jpg" alt="profile" className='profile-img'/>
                <div>
                    <h1 className="visit-card-header">JOANNA DĘBIEC</h1>
                    <div id="visit-card-container">
                        <h3>O mnie</h3>
                        <p>Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i "magią rąk" sprawia, że świat nabiera 
                            barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.</p>
                        <button onClick={() => navigate('/murale')}>Murale</button>
                        <button onClick={() => navigate('/obrazy')}>Obrazy</button>
                        <button onClick={() => navigate('/anioly')}>Anioły</button><br></br>
                        <button onClick={() => navigate('/fotografia_artystyczna')}>Fotografia Art.</button>
                        <button onClick={() => navigate('/reportaze')}>Fotoreportaż</button>
                        <button onClick={() => navigate('/sesje_zdjeciowe')}>Sesje zdjęciowe</button><br></br>
                        <button onClick={() => navigate('/murale')}>Blog osobisty</button><br></br>
                        <button onClick={() => navigate('/murale')}>Poezja</button>
                    </div>
                </div>
        </header>
    )
}