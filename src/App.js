import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'

function App() {

  //define the category and news
  const [category, setCategory] = useState('')

  //new y save news
  const [news, setNews] =useState([])

//consulting Api
useEffect(()=>{
const queryAPI = async () => {
const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=5d1911d8edf34a48b8fe396a8843f96f`;

const response = await fetch(url)
const news = await response.json()
setNews(news.articles);

}
queryAPI()
}, [category])

  return (
   <Fragment>
     <Header title="News Search Engine"
     />
     
     <div className="container white">
       <Form
       setCategory={setCategory}
       />
     </div>
   </Fragment>
  );
}

export default App;
