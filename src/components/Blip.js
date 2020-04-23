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
    blipClient.withCustomStyle("")
  }

//   function stop(){
//     blipClient.destroy();
//   }
  // FAZ A CONSTRUÇÃO BÁSICA DO CHAT
  function build(){
    console.log("build")
    appKey("cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy")
    withStyle()
    start()
    toogle()
  }
  //FAZ A RECONSTRUÇÃO DO CHAT
//   function rebuild(){
  
//       withStyle()
//       start()

    
//   }

  return(
    // cm9iaW46ZjhjZDMxNmEtZTg5Ni00ZDE2LWFmODMtMjg4N2NiNGMxYjQy
    <> 
      {build()}
    </>
  )
}

export default Blip