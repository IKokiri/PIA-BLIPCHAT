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
    blipClient.withCustomStyle(`
      #blip-chat-header {background-color: black ! important}
      div.bubble.right {background-color: black ! important}
      div.bubble.left {background-color: black ! important}
      #messages-list {background-color: black ! important}  
    `)
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
    key = 'cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy'
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