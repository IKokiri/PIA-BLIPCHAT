import React from 'react'
import copy from '../copy.png'
import home from '../home.png'
import chat from '../chat.png'


export const MenuDown = () =>{
    
    return(
        <div className="fixed-bottom">            
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">    
                        <img src={home} alt="Tela incial" />
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://google.com.br">
                    <img src={copy} alt="Copiar" />
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="https://google.com.br">
                        <img src={chat} alt="Chat" />
                    </a>
                </li>
            </ul>        
        </div>
    )
}
