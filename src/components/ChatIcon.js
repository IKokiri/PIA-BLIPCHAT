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
            <button onClick={()=>teste()}>=)</button>
            
        </>

    )

    function teste(){

        fetch('https://api.icons8.com/api/iconsets/search?term=car', {
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin' 'http://localhost:3000',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            }).then(res=>res.json())
            .then(res =>{
                console.log(res);
            });
    }
}
