import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageShow from './components/ImageShow';
 import searchTerm from './api';
export default function App() {

   const [images,setIamges]=useState([]);

      const onHandleChange=async(term)=>{
          console.log(term);
         const results =await searchTerm(term); 
        //  console.log(results);
         setIamges(results);
      }

    // console.log(images);

  return (
    <div>
       <SearchBar onChange={onHandleChange}/>
        <ImageShow images={images} />
       
    </div>
  )
}
