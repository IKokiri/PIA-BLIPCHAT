import React from 'react'

export const ListColorSend = () =>{
    
    return(
        <>
            <h3>Enviadas</h3>
            <div className="row colors container">
            </div>
           {loadColors()}
        </>
    )

    function loadColors(){
       let colors = "";

        fetch('https://gist.githubusercontent.com/kawanet/a880c83f06d6baf742e45ac9ac52af96/raw/b4fbc9a730394eb977277e73cc37b60955463f21/material-colors.json', {
            method: 'GET',
            }).then(res=>res.json())
            .then(res =>{
                for ( let i in res){
                    
                    colors += '<div class="col-3"><button type="button" style="background-color: '+res[i]['900']+'" class="btn">&nbsp;&nbsp;&nbsp;&nbsp;</button></div>'
                    
                }
                document.querySelector(".colors").innerHTML = colors;
            });
    }
}
