import './VisitCard.scss'
import React from "react";
import {  NavLink } from "react-router-dom";

export default function VisitCard(){
    return(
        <header>
                <img src="../imgs/profile/profile.jpg" alt="profile" className='profile-img'/>
                <div>
                    <h1 className="visit-card-header">JOANNA DĘBIEC</h1>
                    <div id="visit-card-container">
                        <h3>O mnie</h3>
                        <p>Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i "magią rąk" sprawia, że świat nabiera 
                            barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.</p>
                        <NavLink to='/murale'><button>Murale</button></NavLink>
                        <NavLink to='/obrazy'><button>Obrazy</button></NavLink>
                        <NavLink to='/anioly'><button>Anioły</button></NavLink><br></br>
                        <NavLink to='/fotografia_artystyczna'><button>Fotografia Art.</button></NavLink>
                        <NavLink to='/reportaze'><button>Fotoreportaż</button></NavLink>
                        <NavLink to='/sesje_zdjeciowe'><button>Sesje zdjęciowe</button></NavLink><br></br>
                        <NavLink to='/murale'><button>Blog osobisty</button></NavLink><br></br>
                        <NavLink to='/murale'><button>Poezja</button></NavLink>
                    </div>
                </div>
        </header>
    )
}