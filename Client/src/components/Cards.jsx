import React from 'react';
import Card from './Card';

export default function Cards({characters, closeHandler}) {
   
   return (
      <div className="todas">
            {characters.map((character) => (
               <Card  
              character ={character} onClose = {closeHandler}
              />
            ))};      
         </div>
   );
}
