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
            <h5>Last</h5>
            
            {
                custom.map(c=>
                // c.header
                <button key={c._id} style={{"margin":"5px"}} className="btn btn-primary">{c._id}</button>
                )
            }

            
        </>
    )
}
