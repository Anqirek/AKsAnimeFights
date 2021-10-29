import React,{useEffect,useState} from 'react'


function NewOPForm({handleChange, handleForm, formData}){
  
  useEffect(() => {
      return () => console.log('form removed')
  },[])

const [newChar, setNewChar] = useState("")


{/* <NewOPForm onSubmit={() => {
  console.log("submitting form...");
}}/>
     */}


return  (
  <>
 
    <form style={{display:"flex", flexDirection:"grid"}}>
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