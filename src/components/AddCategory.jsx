import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {
  const [inputvalue, setInputValue] = useState('one punch')

  const handleChange = (event)=>{
      setInputValue(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(inputvalue.trim().length <= 1) return;
    onNewCategory(inputvalue.trim());
    setInputValue('')
  }
  return (
   <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='ingrese el nombre aqui'
          value={inputvalue}
          onChange={handleChange}
        />
      </form>
   </div>
  )
}

export default AddCategory