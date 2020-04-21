import React from 'react'
import copy from '../copy.png'
import home from '../home.png'
import chat from '../chat.png'


export const MenuDown = () =>{
    
    return(
        <div className="fixed-bottom">            
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">    
                        <img src={home} alt="Tela incial" />
                    </a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                    <img src={copy} alt="Copiar" />
                    </a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                        <img src={chat} alt="Chat" />
                    </a>
                </li>
            </ul>        
        </div>
    )
}
