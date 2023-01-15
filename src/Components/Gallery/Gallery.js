import './Gallery.css'
import React, { useState } from 'react'

export default function Gallery({gallery, close, update}){
    const [mouseOnElement, setMouseOnElement] = useState(false);
    return(
        <div className='gallery' onClick={() => !mouseOnElement && close()}>
            <nav className='top'>
                <button className='warning' onClick={() => close()}>x</button>
            </nav>
                <img 
                src={gallery.viewed} 
                alt="viewed" 
                className='viewed'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}/>
                <nav 
                className='side'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}>
                    {gallery.photos.map((photo, key) => <img alt={`pic from gallery number ${key}`} className={gallery.viewed===photo ? 'active' : null} key={key} src={photo} onClick={() => update(photo)}/>)}
                </nav>
                <nav className='additional'>
                    <button 
                    onMouseOver={() => setMouseOnElement(true)}
                    onMouseLeave={() => setMouseOnElement(false)}
                    onClick={() => {
                        if(gallery.viewed!==gallery.photos[0]){
                            update(gallery.photos[gallery.photos.indexOf(gallery.viewed)-1])
                        }else{
                            return;
                        }
                    }}>{"<"}</button>
                    <button
                    onMouseOver={() => setMouseOnElement(true)}
                    onMouseLeave={() => setMouseOnElement(false)}
                    onClick={() => {
                        if(gallery.viewed!==gallery.photos[gallery.photos.length-1]){
                            update(gallery.photos[gallery.photos.indexOf(gallery.viewed)+1])
                        }else{
                            return;
                        }
                    }}>{">"}</button>
                </nav>
        </div>
    )
}