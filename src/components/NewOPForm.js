import React,{useEffect,useState} from 'react'


function NewOPForm({updateCards}){
  
  useEffect(() => {
    return () => console.log('form removed')
  },[])

const [newChar, setNewChar] = useState("")
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
  


 function onSubmit(e){
   e.preventDefault()
  console.log("submitting form...");
  const newOP = {
    name:formData.name,
    image:formData.image,
    age:formData.age,
    weapon:formData.weapon,
    episode:formData.episode,
    
  }
  console.log(newOP)
  fetch('http://localhost:3000/OP-Characters',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(newOP)
      })
      .then(res => res.json())
      .then(data => {
        updateCards(data)
        setFormData({  
          name:'',
          image:'',
          age:'',
          weapon:'',
          episode:'',
          
          })
      })
}


return  (
  <>
 
    <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"grid"}}>
      <lablel>New OP Character</lablel>
      <br></br>
      <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      >
      </input>
      <br></br>
      <label>Image</label>
      <br></br>
       <input
       type="text"
       name="image"
       value={formData.image}
       onChange={handleChange}
       >
      </input>
      <br></br>
      <label>Age</label>
      <br></br>
       <input
       type="text"
       name="age"
       value={formData.age}
       onChange={handleChange}
       >
      </input>
      <br></br>
      <label>Weapon</label>
      <br></br>
       <input
       type="text"
       name="weapon"
       value={formData.weapon}
       onChange={handleChange}
       >
      </input>
      <br></br>
      <label>Episode</label>
      <br></br>
       <input
       type="text"
       name="episode"
       value={formData.episode}
       onChange={handleChange}
       >
      </input>
      <br></br>
      
      <button>Submit</button>

    </form>

      
  </>
    )
}





export default NewOPForm;