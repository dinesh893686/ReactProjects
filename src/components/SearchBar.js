import React from 'react'
import { useState } from 'react';


export default function SearchBar({onChange}) {


 
    const [term,setTerm]=useState('');

   
    const onHandleSubmit =(event)=>{
           event.preventDefault();
       

          onChange(term);

    }
   const onHandleChange=(event)=>{
       setTerm(event.target.value);      
   }
  return (
    <div>
      <h1>Search Pics</h1>

      <form onSubmit={onHandleSubmit}>
             <label>Enter Search Term</label>
            <input type="text" value={term} onChange={onHandleChange}>
            </input>

      </form>

        {/* <div>{term}</div> */}

    </div>
  )
}
