import React from 'react'

export const Code = () =>{
    
    return(
        <div>
            <div class="form-group">
                <textarea readOnly class="form-control" id="codeArea" rows="3">{localStorage.getItem("code")}</textarea>
                <div>            
                    <ul className="nav justify-content-center">                        
                        <li className="nav-item">
                            <a className="nav-link active" onClick={()=>copyCode()} href="#">
                                <svg className="bi bi-clipboard" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd"/>
                                    <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd"/>
                                </svg>
                            </a>                    
                        </li>                    
                    </ul>        
                </div>
            </div>
        </div>
    )
    function copyCode(){
       let copyText = document.getElementById("codeArea");
        copyText.select();
        if(copyText.value){
            document.execCommand("copy");
        }
    }
}

