import './VisitCard.scss'
import React from "react";
import {  useNavigate } from "react-router-dom";

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
                        <button className='primary' onClick={() => navigate('/murale')}>Murale</button>
                        <button className='primary' onClick={() => navigate('/obrazy')}>Obrazy</button>
                        <button className='primary' onClick={() => navigate('/anioly')}>Anioły</button><br></br>
                        <button className='primary' onClick={() => navigate('/fotografia_artystyczna')}>Fotografia Art.</button>
                        <button className='primary' onClick={() => navigate('/fotoreportaze')}>Fotoreportaże</button>
                        <button className='primary' onClick={() => navigate('/sesje_zdjeciowe')}>Sesje zdjęciowe</button><br></br>
                        <button className='primary' onClick={() => navigate('/blog')}>Blog osobisty</button><br></br>
                        <button className='primary' onClick={() => navigate('/poezja')}>Poezja</button>
                    </div>
                </div>
        </header>
    )
}