import {ADD_FAV,REMOVE_FAV,ORDER_CARDS,FILTER_CARDS} from "./actions"


const initialState = {
    myFavorites:[],
    allCharacters: [],
};

const rootReducer = (state = initialState, actions)=>{
    let {type, payload} = actions;

    switch(type){
        // case ADD_FAV:
        //     return{
        //         ...state,
        //         myFavorites: [...state.myFavorites,payload],
        //         allCharacters: [...state.myFavorites,payload],

        //     };
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: payload, allCharacters: payload 
                
            };
        // case REMOVE_FAV:
        
        //     let filterList = state.myFavorites.filter((element) => element.id !== Number(payload))
        //     return{
        //         ...state,
        //         myFavorites:filterList, 
                    
        //     };   
        
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: payload,
                 
            };

        case FILTER_CARDS:
            return{
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === actions.payload)
            };
        case ORDER_CARDS:
            let ordenados;
            if(actions.payload === "Ascendente"){
                ordenados = state.myFavorites.sort((a,b) => a.id > b.id ? 1 : - 1)
            }else{
                ordenados = state.myFavorites.sort((a,b) => b.id > a.id ? 1 : - 1)
            }
            return{
                ...state,
                myFavorites: [...ordenados]
            }
              


           default:
            return{
                ...state,
            }
    


      
    }

}
export default rootReducer;