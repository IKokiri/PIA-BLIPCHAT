import React from 'react'

export const Colors = props =>{

    return(
        <>

            <button onClick={()=>addColor(props.color,props.local)} style={{"backgroundColor": "#"+props.color}} className="btn">&nbsp;&nbsp;&nbsp;&nbsp;</button>
        
        </>
    )
   
    function addColor(color,local){
     let strg = (localStorage.getItem("withStyle")) === null? "":localStorage.getItem("withStyle");      
     strg += '"'+local+'"'+":"+'"#'+color+'",'
     localStorage.setItem("withStyle",strg);      
    }
}