import React from 'react'

export default function ImageShow({images}) {

    //  console.log(images);
  return(
    <>
    {
          images.map((image)=>{
            // console.log(image);
            return (<div>
                  <img src={image.urls.small} key={image.id}/>
            </div>)
          })
      }
    </>
  )
}
