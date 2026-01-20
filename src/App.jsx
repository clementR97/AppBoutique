import { useState,useEffect } from "react"
import Cart from "./componnents/Cart"
function App() {
  // 🔑 take the URL of Api in .env 
  const API = import.meta.env.VITE_URL_API
  const [dataApi,setData] = useState ([])

  
// fonction for the connect my project with API 
  const ConnectApi = () =>{
     fetch(API)
          .then(reponse => reponse.json())
          .then(data => {console.log(data)
            setData(data)
          })
          
          .catch(error => console.log(error))
          
  }

useEffect(()=>{
    ConnectApi()
    
  },[])
 
return (
<div>
  <Cart dataApi ={dataApi} />
</div>
)

}


export default App
