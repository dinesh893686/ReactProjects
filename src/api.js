import axios from "axios";


// car
const searchTerm =async(term)=>{

     const response =await axios.get('https://api.unsplash.com/search/photos',
      {
         headers:{
            Authorization:'Client-ID mgVQ5jNTaCHCtIVYkPGRqdhqh0pAsBvVoAJyDEW0LpU'
         },

         params:{
              query: term
         }
      }
      )
      //console.log(response);
      return response.data.results;       
      //  console.log(data);
}
export default searchTerm;
