import React from 'react'
import './box.css'
import { useState } from 'react'

export default function () {
const [details,Setdetails] =useState(
    { 
        'content' : 'The human spirit must prevail over technology',
        'author' : 'Albert Einstein'
    }
)

console.log(details);


// const [details1,Setdetails1]=useState('Riya')
// console.log(details1);

// const [state,setstate]=useState(
//   {
//     'content':'A',
//     'author':'B'
//   }
// )
// console.log(state);

  return (
    <>
    <div className="box">
        {details.content}
        <div className='alb'>-{details.author}</div>
        <i className="bi bi-bookmark-plus-fill" />

    </div>
    {/* {details1}
<button className='btn btn-primary' onClick={()=>{Setdetails1('Liya')}}>Click</button>
<div style={{color:'green'}}> {state.content} </div>
<div style={{color:'green'}}> {state.author} </div>

<button className='btn btn-success' onClick={()=>{setstate({'content':'C','author':'D'})}}>click now </button> */}

    </>
  )
}
