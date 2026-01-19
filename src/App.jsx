import { useState,useEffect } from "react"

function App() {
  // 🔑 take the URL of Api in .env 
  const API = import.meta.env.VITE_URL_API
  useEffect(()=>{
    ConnectApi()
    console.log('connexion Api:',API)
  },[])
// fonction for the connect my project with API 
  const ConnectApi = () =>{
     fetch(API)
          .then(reponse => reponse.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
  }


}

export default App
