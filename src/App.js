
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArtcles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a67adbe419cc438f97d6c90465aded46';
    fetch(url)
    .then(res => res.json())
    .then(data => setArtcles(data.articles))
  },
  [])

  return (
    <div>  
         <h2>Heardline : {articles.length}</h2> 
         {
          articles.map(article => <News article = {article}></News>) 
         }
       
    </div>
  
  );
}

export default App;
