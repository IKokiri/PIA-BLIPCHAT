import React from 'react';
import { Link } from 'react-router-dom';


export const MenuUp = () =>{

    return(
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/ListColorHeader"> 
                        <span className="nav-link" href="#">Header</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ListColorSend">
                        <span className="nav-link" href="#">Enviadas</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ListColorReicived">
                        <span className="nav-link" href="#">Recebidas</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ListColorBackground">
                        <span className="nav-link" href="#">Background</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ChatIcon">
                        <span className="nav-link" href="#">Icon</span>
                    </Link>
                </li>
            </ul>
        </>
    )
    
}