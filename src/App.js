import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'

function App() {

  //define the category and news
  const [categories, setCategories] = useState('')

  return (
   <Fragment>
     <Header title="News Search Engine"
     />
     
     <div className="container white">
       <Form
       setCategories={setCategories}
       />
     </div>
   </Fragment>
  );
}

export default App;
