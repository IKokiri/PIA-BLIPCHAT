import React from 'react'

export const Colors = props =>{

    return(
        <>

            <button onClick={()=>addColor(props.color)} style={{"backgroundColor": "#"+props.color}} className="btn">&nbsp;&nbsp;&nbsp;&nbsp;</button>
        
        </>
    )
   
    function addColor(color){
     alert(color);       
    }
}