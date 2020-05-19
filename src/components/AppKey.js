import React from 'react'

export const AppKey = () =>{
    
    return(
        <>
            <div className="form-group">
                <input type="text" onChange={()=>AppKeychange()} className="form-control" id="appKey" aria-describedby="appKeyHelp" placeholder="APP KEY"/>
                <p id="appKeyHelp">
                    <small>Inserir App Key do seu chat boot.</small>
                </p>
            </div>
        </>
    )
    function AppKeychange(){
        let appKey = document.querySelector("#appKey").value
        
        localStorage.setItem('appKey', appKey);
    }
}