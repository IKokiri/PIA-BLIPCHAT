import React from 'react';
import { Link } from 'react-router-dom';


export const MenuDown = () =>{

    

    return(
        <>
            {
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/">   
                            <span className="nav-link" href="#">Home</span> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={()=>clearStorage()}>
                        <span className="nav-link" >Zerar</span> 
                    </Link>
                    </li>
                </ul>
            }
            
        </>
        
    )
    
    function clearStorage(){

        localStorage.setItem("withButton","");
        localStorage.setItem("withStyle","");
        localStorage.setItem("appKey","");
        localStorage.setItem("code","");
    }
}
