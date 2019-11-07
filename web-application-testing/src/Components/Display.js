import React from 'react';




export default function Display(props) {
    

  return (  
          <div>
    
              <h2>Balls: {props.ball}</h2>
            
              <h2>Strikes: {props.strike}</h2>  
      
         </div>
  );
}