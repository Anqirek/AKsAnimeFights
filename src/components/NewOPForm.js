
import React,{useEffect,useState} from 'react'


function NewOPForm({handleChange, handleForm, formData,handleSubmit}){


const [newChar, setNewChar] = useState("")




    
  

return  (
  <>
    <form onSubmit={handleSubmit}>
      <lablel>New OP Character</lablel>
      <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      >
      </input>
      <label>Image</label>
       <input
       type="text"
       name="image"
       value={formData.image}
       onChange={handleChange}
       >
      </input>
      <label>Age</label>
       <input
       type="text"
       name="age"
       value={formData.age}
       onChange={handleChange}
       >
      </input>
      <label>Weapon</label>
       <input
       type="text"
       name="weapon"
       value={formData.weapon}
       onChange={handleChange}
       >
      </input>
      <label>Episode</label>
       <input
       type="text"
       name="episode"
       value={formData.episode}
       onChange={handleChange}
       >
      </input>

    </form>

      
  </>
    )
}





export default NewOPForm;