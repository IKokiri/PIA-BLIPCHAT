import React from 'react'
import background from '../submenu/background.png'
import chat from '../submenu/chat.png'
import header from '../submenu/header.png'
import reicived from '../submenu/reicived.png'
import send from '../submenu/send.png'
import back from '../submenu/back.png'

export const MenuUp = () =>{
    
    return(
        <div className="fixed-bottom">            
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">    
                        <img src={back} alt="Voltar" />
                    </a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">    
                        <img src={header} alt="Alterar Cabeçalho" />
                    </a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                    <img src={send} alt="Mensagens Enviadas" />
                    </a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                        <img src={reicived} alt="Mensagens Recebidas" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                        <img src={background} alt="Cor de fundo" />
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="https://google.com.br">
                        <img src={chat} alt="Botão blip chat" />
                    </a>
                </li>
            </ul>        
        </div>
    )
}
