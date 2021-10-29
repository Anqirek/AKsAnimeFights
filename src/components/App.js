import React, {useEffect,useState} from 'react';
import Header from './Header'
import NewOPForm from './NewOPForm'
import OPContainer from './OPContainer'
import OPCard from './OPCard'
import OPCharacterInfo from './OPCharacterInfo';
import {Switch, Route} from 'react-router-dom'



function App() {

  const [selectChar, setSelectChar] = useState([])
  const [formData, setFormData] = useState({
    name:'',
    image:'',
    age:'',
    weapon:'',
    episode:'',
    quote:'',
    age:''
    })
    useEffect(() => {
      console.log(formData)
    },[formData])
    
    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:3000/OP-Characters',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        setSelectChar([data, ...selectChar])
        setFormData({  
          name:'',
          image:'',
          age:'',
          weapon:'',
          episode:'',
          quote:'',
          age:''})
      })
    }
   

  return (

    <div className = "App">

        <Switch>
        <Route path = "/OPContainer">
          <OPContainer/>
        </Route>

        <Route path = "/OPCard">
          <OPCard  />
        </Route>
        <Route exact path = "/">
        <NewOPForm formData={formData} handleChange={handleChange}/>
          <Header />
        </Route>
        <Route path = "/OPCharacterInfo">
        <OPCharacterInfo />
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
