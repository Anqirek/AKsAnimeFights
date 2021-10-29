import React from 'react';
import Header from './Header'
import NewOPForm from './NewOPForm'
import OPContainer from './OPContainer'
import OPCard from './OPCard'
import {Switch, Route} from 'react-router-dom'
// import OPCharacterInfo from './OPCharacterInfo';



function App() {

  // const [selectChar, setSelectChar] = useState([])


  return (

    <div className = "App">
      <Switch>
        <Route exact path = "/OPContainer">
          <OPContainer />
        </Route>
        <Route exact path = "/OPCard">
          <OPCard  />
        </Route>
        <Route exact path = "/">
        {/* <NewOPForm formData={formData} handleChange={handleChange}/> */}
          <Header />
          
        </Route>
        <Route path = "*">
          <h1>
          404 Not Found
          </h1>
        </Route>
        
      </Switch>

      
    </div>

        
  )  
}

export default App;
