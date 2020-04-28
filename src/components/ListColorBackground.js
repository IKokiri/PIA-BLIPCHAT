import React, { useState, useEffect} from 'react';
import {Colors} from "../components"
import { Color  } from '../api/Color';

export const ListColorBackground = () =>{
    const [colors, setColors] = useState([]);

    function startUp(){
        
        let c = Color.getColors();
        
        c.then(
            function(data){
                setColors(data);
                
            }
        )
    }
    useEffect(() => startUp(),[])
    
    return(
        
        <>
            <h3>Background</h3>
            <div className="row colors container">
            </div>
            
           {
           
           colors.map(color=>
                    
               <Colors color={color.hexString} key={color.colorId} local="background"></Colors> 
            )}
        </>
    )
}
