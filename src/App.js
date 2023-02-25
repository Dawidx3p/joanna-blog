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
  const poezjatekst = 'Słowem wyrażałam zawsze swoje myśli, układałam je,gdy nie mogłam ogarnąć. Poezja to istna zabawa słowem, delektowanie się symboliką, bogactwem znaczeń, niedopowiedzeniami... przestrzenią pomiędzy wierszami. Pokazuje piękno języka. Nieraz tylko poezja potrafi wyrazić to,czego nie sposób powiedzieć wprost, opisać, namalować czy sfotografować.';
  const blogtekst = 'Ponad 20 lat pracy dziennikarskiej spowodowało, iż pisanie stało się dla mnie prawdziwą pasją. Pisząc blog o wyzwaniach, inspiracjach i odkryciach - będę mogła mieć kontakt z Czytelnikiem mojej strony, a przede wszystkim stworzę przestrzeń, która mam nadzieję będzie inspirować innych.';
  const grafikatekst = 'Rok 2023 rozpoczęłam wyjątkowym wyzwaniem, którym zainspirował mnie wyjątkowy i ważny dla mnie człowiek. Kiedyś brałam udział w wyzwaniu 365 - jedna fotografia każdego dnia, powstało ponad 300 zdjęć i niestety strona zmieniła zasady, odpuściłam... ale to wyzwanie było mobilizujące i wiele mi dało. Tym razem to wyzwanie 365 - jedna GRAFIKA każdego dnia. Będę je tu umieszczać co jakiś czas... Niech się dzieje kolejny, twórczy rok 2023!';
  const modatekst = 'Kocham kolory i lubię się ubierać oryginalnie. Zawsze wyszukiwałam i łączyłam różne elementy ubiorów tak, żeby tworzyły coś ciekawego, niebanalnego. Dotyczyło to zarówno ubioru, jak i dodatków: biżuterii, rękawiczek, manetek, szali, po fascynatory... Kobiece piękno jest tożsame z pięknem natury, która mnie inspiruje i zachwyca. To z jej barw i wzorów chcę czerpać pomysły do tworzenia strojów pełnych barw jak motyle, delikatności jak kwiaty,  strojów, które podkreślają kobiecą zmienność jak zmienna jest natura wraz z porami roku i piękno. Chcę tworzyć stroje dla odważnych kobiet, świadomych swojej niepowtarzalności. W każdej z nas to jest. I każda kobieta odnajdzie tu coś swojego. Co jakiś czas pokaże się coś nowego, zaglądajcie, piszcie, inspirujcie i mnie...';

  const compareDates = (a,b) => {
    const date1 = new Date(a.data.date);
    const date2 = new Date(b.data.date);
    return date1.getTime()-date2.getTime()
  }

  const recent = [...articles].sort((a,b) => compareDates(a,b)).reverse();
  const photography = recent.filter(article => article.data.article_type==='Fotografia Artystyczna');
  const sesje = recent.filter(article => article.data.article_type==='Sesja zdjęciowa');
  const photoReportage = recent.filter(article => article.data.article_type==='Fotoreportaż');
  const paintings = recent.filter(article => article.data.article_type==='Obrazy');
  const angels = recent.filter(article => article.data.article_type==='Anioły');
  const murals = recent.filter(article => article.data.article_type==='Murale');
  const blog = recent.filter(article => article.data.article_type==='Blog');
  const poezja = recent.filter(article => article.data.article_type==='Poezja');
  const moda = recent.filter(article => article.data.article_type==='Moda');
  const grafika = recent.filter(article => article.data.article_type==='Grafika');
  const newest10=[...grafika.slice(0,1), ...poezja.slice(0,1), ...blog.slice(0,1), ...murals.slice(0,1), ...angels.slice(0,1), ...paintings.slice(0,1), ...photoReportage.slice(0,1), ...photography.slice(0,1)].sort((a,b) => new Date(b.data.date) - new Date(a.data.date))

  useEffect(() => {
    getAllArticles().then(articles => setArticles([...articles].reverse()))
    getAllComments().then(comments => setComments([...comments].reverse()))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage  newest10={newest10} articles={recent.slice(0,10)} />}/>
          <Route path='/fotografia_artystyczna' element={<Homepage foto={'/imgs/opisowe/fotografia_art.jpg'} description={fotografiaart} newest10={newest10} articles={photography} />}/>
          <Route path='/obrazy' element={<Homepage foto={'/imgs/opisowe/obrazy.jpg'} description={malarstwo} newest10={newest10} articles={paintings} />}/>
          <Route path='/sesje_zdjeciowe' element={<Homepage foto={'/imgs/opisowe/sesje.jpg'} description={fotografiaart} newest10={newest10} articles={sesje} />}/>
          <Route path='/fotoreportaze' element={<Homepage foto={'/imgs/opisowe/fotoreportaz.jpg'} description={fotografiaart} newest10={newest10} articles={photoReportage} />}/>
          <Route path='/anioly' element={<Homepage foto={'/imgs/opisowe/malowanie.jpg'} description={malarstwo} newest10={newest10} articles={angels} />}/>
          <Route path='/murale' element={<Homepage foto={'/imgs/opisowe/murale.jpg'} description={malarstwo} newest10={newest10} articles={murals} />}/>
          <Route path='/blog' element={<Homepage foto={'/imgs/opisowe/blog.jpg'} description={blogtekst} newest10={newest10} articles={blog} />}/>
          <Route path='/poezja' element={<Homepage foto={'/imgs/opisowe/poezja.jpg'} description={poezjatekst} newest10={newest10} articles={poezja} />}/>
          <Route path='/aktualnosci' element={<Homepage newest10={newest10} articles={recent} />}/>
          <Route path='/grafika' element={<Homepage foto={'/imgs/opisowe/grafika.jpg'} description={grafikatekst} newest10={newest10} articles={grafika} />}/>
          <Route path='/moda' element={<Homepage foto={'/imgs/opisowe/grafika.jpg'} description={modatekst} newest10={newest10} articles={moda} />}/>
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
