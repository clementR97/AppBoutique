import { useState,useEffect } from "react"

import Cart from "./componnents/Cart"
import Category from "./componnents/Category"

function App() {
  // 🔑 take the URL of Api in .env 
  const API = import.meta.env.VITE_URL_API
  const [dataApi,setData] = useState ([])
  
  // useState for filter  categories
  const [selectedCategory,setCategory] = useState ('')
  
  //function for filter categories
  const categories = [...new Set(
        dataApi.map(cate=>cate.category)
      )]
      //  function for returns filtered articles as an array
  const filterArray = selectedCategory ? dataApi.filter(item => item.category === selectedCategory) : dataApi
      
  

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
  <Category categories={categories} filter={selectedCategory} setFilter={setCategory} />
  <Cart dataApi ={dataApi} filter={filterArray}/>
</div>
)

}


export default App
