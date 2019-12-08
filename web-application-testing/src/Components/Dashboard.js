import React from 'react';


export default function Dashboard  ({ strikeBall, hit, foul })  {
  

  return (
    <div>
      <button onClick={strikeBall} value='strike'>Strike</button>
      <button onClick={strikeBall} value='ball'>Ball</button> 
      <button onClick={hit}value='strike'>Hit</button> 
      <button onClick={foul}value='foul'>Foul</button> 
      
        
    </div>
  )
}