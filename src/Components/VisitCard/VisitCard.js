import './VisitCard.scss'
import React from "react";

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
                        <button>Murale</button>
                        <button>Obrazy</button>
                        <button>Anioły</button><br></br>
                        <button>Fotografia Art.</button>
                        <button>Fotoreportaż</button>
                        <button>Sesje zdjęciowe</button><br></br>
                        <button>Blog osobisty</button><br></br>
                        <button>Poezja</button>
                    </div>
                </div>
        </header>
    )
}