import React from 'react';


export const MenuDown = () =>{

    

    return(
        <>
            {
                <div className="fixed-bottom">            
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">   
                                <svg className="bi bi-house-door-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                                    <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clipRule="evenodd"/>
                                </svg>
                            </a>                    
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={()=>clearStorage()} href="/">
                            <svg className="bi bi-trash" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clipRule="evenodd"/>
                            </svg>
                            </a>                    
                        </li>
                    
                    </ul>        
                </div>
            }
            
        </>
        
    )
    
        
  
    function clearStorage(){

        localStorage.setItem("withButton","");
        localStorage.setItem("withStyle","");
        localStorage.setItem("appKey","");
        localStorage.setItem("code","");
    }
}
