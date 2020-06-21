import React from 'react'

export const AppKey = () =>{
    
    return(
        <form>
            <h4>&nbsp;</h4>
            <div className="form-group">
                <input type="text" style={{fontFamily: "courier new",letterSpacing:"0.5em"}} onChange={()=>AppKeychange()} className="form-control text-center ml-1" id="appKey" aria-describedby="appKeyHelp" placeholder="APP KEY"/>
                <p id="appKeyHelp">
                    <small>Inserir App Key do seu chat boot.</small>
                </p>
            </div>
        </form>
    )
    function AppKeychange(){
        let appKey = document.querySelector("#appKey").value
        
        localStorage.setItem('appKey', appKey);
    }
}