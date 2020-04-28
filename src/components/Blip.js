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
    console.log(style)
    blipClient.withCustomStyle(style)
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
  // FAZ A CONSTRUÇÃO BÁSICA DO CHAT
  function build(){
    
    let key = localStorage.getItem('appKey');
    appKey(key)
    withStyle()
    withButton()
    start()
    toogle()
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