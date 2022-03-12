import './Article.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../AddComment";
import Comments from "../Comments";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import Thumbnail from '../Thumbnail/Thumbnail';

export default function Article({ isLoading, toggleLoading, articles, comments, addComment, updateComment}){
    let params = useParams();
    const [article, setArticle] = useState([]);
    const [date, setDate] = useState('');

    let current = articles.find(article => article.ref['@ref'].id===params.id);

    useEffect(() => {
        setArticle(current ? current : [])
        setDate(new Date(current ? current.data.date : ''))
    },[articles, current])

    useEffect(() => {
        toggleLoading();
        window.scrollTo(0,0);
    },[current, toggleLoading])

    return (
        <>
        <Navigation/>
        {isLoading ? <div className="riple-container"><div className="lds-ripple"><div></div><div></div></div></div> : 
        <main>
            <article>
                {article.data && article.data.article.map((part, key) => {
                    switch(part.type){
                        case 'h1':
                            return <h1 key={key}>{part.content}</h1>;
                        case 'h2':
                            return <h2 key={key}>{part.content}</h2>;
                        case 'h3':
                            return <h3 key={key}>{part.content}</h3>;
                        case 'h4':
                            return <h4 key={key}>{part.content}</h4>;
                        case 'p':
                            return <p key={key}>{part.content}</p>;
                        case 'list':
                            return <ul key={key}>{part.content.map((item, key) => <li key={key}>{item}</li>)}</ul>;
                        case 'slider':
                            return <Slider key={key} imgs={part.content}/>;
                        case 'img':
                            return <img src={part.content} alt='for the blog article'  key={key}/>;
                        default:
                            return null;
                    }
                })}
                <p className="date">Dodano: {date && date.toLocaleDateString()}</p>
                <section className="comments-container">
                    <AddComment articleId={params.id} addComment={addComment}/>
                    <Comments comments={comments}  articleId={params.id} updateComment={updateComment}/>
                </section>
            </article>
            <section className="article-section">
                <h2>Na czasie</h2>
                {articles.map((article, key) => <Thumbnail key={key} article={article}/>)}
            </section>
        </main>}
        </>
        
        
    )
}