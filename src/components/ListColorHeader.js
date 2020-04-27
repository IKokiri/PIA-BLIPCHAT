import React, { useState, useEffect, Suspense,lazy } from 'react';
import {Colors} from "../components"
import { Color  } from '../api/Color';

export const ListColorHeader = () =>{
    const [colors, setColors] = useState([]);

    function startUp(){
        
        let c = Color.getColors();
        
        c.then(
            function(data){
                setColors(data.schemes[0].colors);
                console.log(data.schemes)
            }
        )
    }
    useEffect(() => startUp(),[])
    // http://www.colr.org/json/scheme/latest
    return(
        <>
            <h3>Cabeçalho</h3>
            <div className="row colors container">
            </div>
           
           {colors.map(color=>
               <Colors color={color} key={color}></Colors> 
            )}
           {/* <Colors color></Colors> */}
           {/* {console.log(c.)} */}
        </>
    )

    // function loadColors(){
    //    let colors = "";

    //     fetch('https://gist.githubusercontent.com/kawanet/a880c83f06d6baf742e45ac9ac52af96/raw/b4fbc9a730394eb977277e73cc37b60955463f21/material-colors.json', {
    //         method: 'GET',
    //         }).then(res=>res.json())
    //         .then(res =>{
    //             for ( let i in res){
                    
    //                 colors += ""
                    
    //             }
    //             document.querySelector(".colors").innerHTML = colors;
    //         });
    // }

}
