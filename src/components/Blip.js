import React from 'react';
import { BlipChat } from "blip-chat-widget";

const Blip = (props) =>{
  
  let blipClient = new BlipChat()

  function start(){
    blipClient.build()
  }

  function toogle(){
    blipClient.toogleChat();
  }

  function appKey(key){
    blipClient.withAppKey(key)
  }
  
  function withStyle(){

    let withS = localStorage.getItem("withStyle");
    
    if(withS !== null){
      withS = withS.substring(0,(withS.length - 1));
    
    withS = "{"+withS+"}";
    withS = JSON.parse(withS)
    
    let style="";
    for(let i in withS){
      
      if (i === "header"){
        style+= '#blip-chat-header {background-color: '+withS[i]+' ! important} '
      }
      if (i === "enviadas"){
        style+= 'div.bubble.right {background-color: '+withS[i]+' ! important} '
      }
      if (i === "recebidas"){
        style+= 'div.bubble.left {background-color: '+withS[i]+' ! important} '
      }
      if (i === "background"){
        style+= '#messages-list {background-color: '+withS[i]+' ! important} '
      }
    }
    
    blipClient.withCustomStyle(style)

    return style;
    }
    
  }
  function withButton(){
    blipClient.withButton({
      icon:
        localStorage.getItem("withButton"),
    })
  }

  function stop(){
    blipClient.destroy();
  }
  function code(ws,wk,wb){
      localStorage.setItem("code",(`<script src="https://unpkg.com/blip-chat-widget" type="text/javascript">
      </script>
      <script>
          (function () {
              window.onload = function () {
                  new BlipChat()
                  .withAppKey("`+wk+`")
                  .withButton({"icon":"`+wb+`"})
                  .withCustomStyle("`+ws+`")
                  .withCustomCommonUrl("https://chat.blip.ai")
                  .build();
              }
          })();
      </script>`))
  }
  // FAZ A CONSTRUÇÃO BÁSICA DO CHAT
  function build(){
    //withStyle
    let ws ="";
    //with button
    let wb ="";
    //with key
    let wk ="";


    let key = localStorage.getItem('appKey');
    
    appKey(key)
    ws = withStyle()
    withButton()
    start()
    toogle()

    wk = key
    wb = localStorage.getItem("withButton");
    

    code(ws,wk,wb)
    
  }


  return(
    // cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy
    <> 
      <button onClick={()=>build()}>V</button>
      <button onClick={()=>stop()}>X</button>
      
    </>
  )
}

export default Blip