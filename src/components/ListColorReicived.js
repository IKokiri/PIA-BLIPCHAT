import React, { useState, useEffect} from 'react';
import {Colors} from "../components"
import { Color  } from '../api/Color';

export const ListColorReicived = () =>{
    const [colors, setColors] = useState([]);

    function startUp(){
        
        let c = Color.getColors();
        
        c.then(
            function(data){
                setColors(data.schemes[0].colors);
                
            }
        )
    }
    useEffect(() => startUp(),[])
    
    return(
        <>
            <h3>Recebidas</h3>
            <div className="row colors container">
            </div>
           
           {colors.map(color=>
               <Colors color={color} key={color} local="recebidas"></Colors> 
            )}
        </>
    )
}