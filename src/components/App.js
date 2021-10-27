
import React , {useState} from 'react';
import Header from './Header'
import NewOPForm from './NewOPForm'
import OPContainer from './OPContainer'
import OPCharacterInfo from './OPCharacterInfo'
import {Switch, Route} from 'react-router-dom'



function App() {

const [page, setPage] = useState("/")

  return (

    <div className = "App">
  <Switch>
     <Route path = "/OPContainer">
      <OPContainer />
             </Route>
                <Route path = "/OPCharacterInfo">
             <OPCharacterInfo />
            </Route>
           <Route exact path = "/">
        <Header />
      </Route>
        <Route path = "*">
    <h1>
      404 Not Found
    </h1>
      </Route>
  </Switch>
    

        
  )  
}

export default App;
