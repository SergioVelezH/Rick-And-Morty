import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";



// export const addFav = (character)=>{
//     return{
//         type: ADD_FAV,
//         payload: character,
//     }
// };




export const addFav = (character) => {

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
         const {data} = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
           });      
   } 
} catch (error) {
      console.log(error);
   }
}

// export const removeFav = (id)=>{
//     return{
//         type: REMOVE_FAV,
//         payload: id,
//     }
// };

export const removeFav = (id) => {

   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint)
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });
      };  
   } catch (error) {
      console.log(error)
   }
 };

export const filterCards = (gender)=>{
    return{
        type: FILTER_CARDS,
        payload: gender,
    }
};

export const orderCards = (order)=>{
    return{
        type: ORDER_CARDS,
        payload: order,
    }
};