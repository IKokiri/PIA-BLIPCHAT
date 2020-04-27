import React from 'react'

export const ChatIcon = () =>{
    
    return(
        <>

            <h3>Chat</h3>
            
        
            <div className="form-group">
                <input type="text" onChange={()=>addButtonIcon()} className="form-control" id="chatIcon" aria-describedby="ChatIConKeyHelp" placeholder="URL CHAT ICON"/>
                <p id="ChatIConKeyHelp">
                    <small>Inserir o caminho da imagem para o icone do seu chat boot.</small>
                </p>
            </div>
            
            
        </>

    )

    function addButtonIcon(){
        
        let icon = document.querySelector("#chatIcon").value
        
        localStorage.setItem('withButton', icon);
        
    }

   
}
