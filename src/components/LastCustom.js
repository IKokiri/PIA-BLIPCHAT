import React, { useState, useEffect} from 'react';
import { Custom } from '../api/Custom';


export const LastCustom = () =>{
    const [custom, setCustom] = useState([]);

    function startUp(){
        
        let c = Custom.getCustom();
        
        c.then(
            function(data){
                
                setCustom(data);               
                
            }
        )
    }
    useEffect(() => startUp(),[])
    
    return(
        
        <>
            <h5>Compartilhados</h5>
            
            {
                custom.map(c=>
                // c.header
                <button key={c._id} onClick={()=>getId(c._id)} style={{"margin":"5px"}} className="btn btn-primary">{c._id}</button>
                )
            }
            
        </>
    )

    function getId(id){
        
        let c = Custom.getId(id);
        
        c.then(
            function(data){   
                let wss = data.ws.replace(/@@/g, "#");
                let wbs = data.wb.replace(/@@/g, "/");
                localStorage.setItem('withButton',wbs);
                localStorage.setItem('withStyle',wss);
            }
        )
    }
}
