import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllArticles, getAllComments } from './api';

import './App.scss';
import './MyTemplate.scss';

import Homepage from './Components/Homepage/Homepage';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Timeout from './Components/Timeout';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const fotografiaart = 'Pasja fotografowania zrodziła się w pracy dziennikarskiej, świetnie czuję się zarówno w fotoreportażu (kilka wystaw), jak i robiąc indywidualne czy rodzinne sesje zdjęciowe. Na co dzień lubię zbliżać i fotografować otaczającą naturę.';
  const malarstwo = 'To przestrzeń,którą mam w sobie od zawsze, ale od niedawna mogę ją ponownie w sobie odkrywać w wielu odsłonach. Maluję murale ścienne, tak baśniowe,jak i stylowe,wedle indywidualnych projektów, obrazy na płótnie, drewnie i kobiece Anioły z intencją. ';
  const poezja = 'Słowem wyrażałam zawsze swoje myśli, układałam je,gdy nie mogłam ogarnąć. Poezja to istna zabawa słowem, delektowanie się symboliką, bogactwem znaczeń, niedopowiedzeniami... przestrzenią pomiędzy wierszami. Pokazuje piękno języka. Nieraz tylko poezja potrafi wyrazić to,czego nie sposób powiedzieć wprost, opisać, namalować czy sfotografować.';
  const blogtekst = 'Ponad 20 lat pracy dziennikarskiej spowodowało, iż pisanie stało się dla mnie prawdziwą pasją. Pisząc blog o wyzwaniach, inspiracjach i odkryciach - będę mogła mieć kontakt z Czytelnikiem mojej strony, a przede wszystkim stworzę przestrzeń, która mam nadzieję będzie inspirować innych.';
  
  const compareDates = (a,b) => {
    const date1 = new Date(a.data.date);
    const date2 = new Date(b.data.date);
    return date1.getTime()-date2.getTime()
  }

  const recent = [...articles].sort((a,b) => compareDates(a,b)).reverse();
  const photography = recent.filter(article => article.data.article_type==='Fotografia Artystyczna');
  const sesje = recent.filter(article => article.data.article_type==='Sesje Zdjęciowe');
  const photoReportage = recent.filter(article => article.data.article_type==='Reportaż');
  const paintings = recent.filter(article => article.data.article_type==='Obrazy');
  const angels = recent.filter(article => article.data.article_type==='Anioły');
  const murals = recent.filter(article => article.data.article_type==='Murale');
  const blog = recent.filter(article => article.data.article_type==='Blog');
  const newest10=recent.slice(0,10);

  useEffect(() => {
    getAllArticles().then(articles => setArticles([...articles].reverse()))
    getAllComments().then(comments => setComments([...comments].reverse()))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage  newest10={newest10} articles={articles} />}/>
          <Route path='/fotografia_artystyczna' element={<Homepage description={fotografiaart} newest10={newest10} articles={photography} />}/>
          <Route path='/obrazy' element={<Homepage description={malarstwo} newest10={newest10} articles={paintings} />}/>
          <Route path='/sesje_zdjeciowe' element={<Homepage description={fotografiaart} newest10={newest10} articles={sesje} />}/>
          <Route path='/reportaze' element={<Homepage description={fotografiaart} newest10={newest10} articles={photoReportage} />}/>
          <Route path='/anioly' element={<Homepage description={malarstwo} newest10={newest10} articles={angels} />}/>
          <Route path='/murale' element={<Homepage description={malarstwo} newest10={newest10} articles={murals} />}/>
          <Route path='/blog' element={<Homepage newest10={newest10} articles={blog} />}/>
          <Route path='/aktualnosci' element={<Homepage newest10={newest10} articles={recent} />}/>
          <Route path='/article/:id' element={<Article 
          newest10={newest10}
          articles={articles} 
          comments={comments} 
          updateComment={(newComment, id) => setComments(prev => prev.map(comment => {
            return comment.ref['@ref'].id===id ? newComment : comment;
          }))} 
          addComment={(comment => setComments(prev => [comment, ...prev]))}/>}/>
          <Route path='/timeout' element={<Timeout />}/>
        </Routes>
        <Navigation articles={articles}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
