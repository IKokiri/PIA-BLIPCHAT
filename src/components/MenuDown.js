import React from 'react'
import copy from '../copy.png'
import home from '../home.png'
import chat from '../chat.png'


export const MenuDown = () =>{
    
    return(
        <div className="fixed-bottom">            
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <img src={home} alt="Tela incial" />
                </li>
                <li class="nav-item">
                    <img src={copy} alt="Copiar" />
                </li>
                <li class="nav-item">
                <img src={chat} alt="Chat" />
                </li>
            </ul>        
        </div>
    )
}
