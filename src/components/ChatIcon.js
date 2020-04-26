import React from 'react'

export const ChatIcon = () =>{
    
    return(
        <>

            <h3>Chat</h3>
            
        
            <div className="form-group">
                <input type="text" className="form-control" id="chatIcon" aria-describedby="ChatIConKeyHelp" placeholder="URL CHAT ICON"/>
                <p id="ChatIConKeyHelp">
                    <small>Inserir o caminho da imagem para o icone do seu chat boot.</small>
                </p>
            </div>
            
            
        </>

    )

   
}

// grant_type:'jwt_bearer',
// 			client_id: 'INSERT_CLIENT_ID',
// 			client_secret: 'INSERT_CLIENT_SECRET'