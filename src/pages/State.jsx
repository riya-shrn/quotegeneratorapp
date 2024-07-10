import React from 'react'
import { useState } from 'react'

export default function State() {

const[details,SetDetails] = useState({
    'content':'gfvbldsbvjhbvlsfbv',
    'author':'name'
})


console.log(details);

  return (
<>
<div style={{color:'red'}}>{details.author}</div>
<div style={{color:'red'}}>{details.content}</div>
<button className='btn btn-primary' onClick={()=>{SetDetails('Maneesh')}}> click</button>
</>
    
  )
}
