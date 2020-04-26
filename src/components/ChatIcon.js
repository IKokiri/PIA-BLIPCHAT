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

        fetch('https://api.iconfinder.com/v3/icons/search?query=trash', {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'grant_type':'jwt_bearer',
                'client_secret': '6hqB2N4gkQ8OfzuSb0sETALds0izDnUbcSJUbRAeTyezu8PUVxuMiD3Qpdb4Vvxr',
                'client_id': 'Yh8DUAY4PpPVQFnNVJrvdTR3T5xSMxDI8b25mXCy9OajXOU86DYXkw8YcSDa8bXQ',
            },
            }).then(res=>res.json())
            .then(res =>{
                console.log(res);
            });
    }
}

// grant_type:'jwt_bearer',
// 			client_id: 'INSERT_CLIENT_ID',
// 			client_secret: 'INSERT_CLIENT_SECRET'