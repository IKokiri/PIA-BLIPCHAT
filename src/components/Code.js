import React from 'react'
import { Custom } from '../api/Custom';

export const Code = () =>{
    
    return(
        <div>
            <div className="form-group">
            <textarea readOnly className="form-control" id="codeArea" rows="3" value={localStorage.getItem("code")}>{localStorage.getItem("code")}</textarea>
                <div>            
                    <br/>
                    <ul className="nav justify-content-center">                        
                        <li className="nav-item" style={{"cursor":"pointer"}} onClick={()=>copyCode()}>
                                <svg style={{"margin":"10px"}} className="bi bi-clipboard" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z" clipRule="evenodd"/>
                                    <path fillRule="evenodd" d="M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z" clipRule="evenodd"/>
                                </svg>
                        </li>          
                        <li style={{"cursor":"pointer"}}  onClick={()=>share()}>     
                            <svg style={{"margin":"10px"}} className="bi bi-cloud-upload" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.887 6.2l-.964-.165A2.5 2.5 0 1 0 3.5 11H6v1H3.5a3.5 3.5 0 1 1 .59-6.95 5.002 5.002 0 1 1 9.804 1.98A2.501 2.501 0 0 1 13.5 12H10v-1h3.5a1.5 1.5 0 0 0 .237-2.981L12.7 7.854l.216-1.028a4 4 0 1 0-7.843-1.587l-.185.96z"/>
                                <path fillRule="evenodd" d="M5 8.854a.5.5 0 0 0 .707 0L8 6.56l2.293 2.293A.5.5 0 1 0 11 8.146L8.354 5.5a.5.5 0 0 0-.708 0L5 8.146a.5.5 0 0 0 0 .708z"/>
                                <path fillRule="evenodd" d="M8 6a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 6z"/>
                            </svg>      
                        </li>
                    </ul>        
                </div>
            </div>
            
        </div>
    )

    function copyCode(){
        document.querySelector("#codeArea").value = localStorage.getItem("code")
       let copyText = document.getElementById("codeArea");
        copyText.select();
        if(copyText.value){
            document.execCommand("copy");
        }
    }

    function share(){
        // let l = localStorage.getItem("withStyle")
        // "header":"1111","send":"2222","received":"3333","background":"4444","icon":"5555"
        Custom.setCustom('11111/2222/3333/4444/5555')
    }
}

