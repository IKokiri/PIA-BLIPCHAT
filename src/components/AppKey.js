import React from 'react'

export const AppKey = () =>{
    
    return(
        <>
            <div class="form-group">
                <input type="text" class="form-control" id="appKey" aria-describedby="appKeyHelp" placeholder="APP KEY"/>
                <p id="appKeyHelp">
                    <label>Inserir key do seu chat boot.</label>
                </p>
            </div>
        </>
    )
}