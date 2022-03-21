import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import VisitCard from "../VisitCard/VisitCard";
import Short from "../Short/Short";
import Thumbnail from '../Thumbnail/Thumbnail';
import { FacebookShareButton } from "react-share";

import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function Homepage({articles, newest10}){

    let location = useLocation();

    useEffect(() => {
        if(location.pathname!=='/'){
            window.scrollTo({top: 900, left: 0, behavior: 'smooth'});
        }
        
    },[location])

    return(
        <>
        <Helmet>
            <title>Joanneart</title>
            <meta property="og:site_name" content="Joanneart"></meta>
            <meta property="og:url" content="https://joanneart.netlify.app"></meta>
            <meta property="og:type" content="blog"></meta>
            <meta property="og:title" content="Blog Joanneart. Tematy: Fotografia, Malarstwo, Murale, Sesja Zdjęciowa, Reportaż, Moda"></meta>
            <meta property="og:description" content='Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i "magią rąk" sprawia, że świat nabiera barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.'></meta>
            <meta property="og:image" content="https://joanneart.netlify.app/imgs/profile/profile.jpg"></meta>
        </Helmet>
        <Navigation/>
        <VisitCard />
        <main>
            <div className='shorts'>
            {articles.map((article, key) => <Short article={article} key={key} />)}
            <FacebookShareButton url={`https://joanneart.netlify.app`}>
                    <button>Udostępnij</button>
            </FacebookShareButton>
            </div>
            <section className='section'>
                <h1>Najnowsze</h1>
            {newest10 && newest10.map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}