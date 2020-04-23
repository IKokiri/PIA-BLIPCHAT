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
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">    
                        <img src={back} alt="Voltar" />
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/ListColorHeader">    
                        <img src={header} alt="Alterar Cabeçalho" />
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/ListColorSend">
                    <img src={send} alt="Mensagens Enviadas" />
                    </a>                    
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/ListColorReicived">
                        <img src={reicived} alt="Mensagens Recebidas" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/ListColorBackground">
                        <img src={background} alt="Cor de fundo" />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/ListColorChat">
                        <img src={chat} alt="Botão blip chat" />
                    </a>
                </li>
            </ul>        
        </div>
    )
}