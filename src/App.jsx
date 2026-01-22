import { useState,useEffect } from "react"

import Cart from "./componnents/Cart"
import Category from "./componnents/Category"
import Panier from "./componnents/Panier"

function App() {
  // 🔑 take the URL of Api in .env 
  const API = import.meta.env.VITE_URL_API
  const [dataApi,setData] = useState ([])
  
  // useState for filter  categories
  const [selectedCategory,setCategory] = useState ('')
  // useState for the bag 
  const [selectedPanier, setPanier] = useState ([])

  //function for filter categories
  const categories = [...new Set(
        dataApi.map(cate=>cate.category)
      )]
      //  function for returns filtered articles as an array
  const filterArray = selectedCategory ? dataApi.filter(item => item.category === selectedCategory) : dataApi
      
  //data in the localStorage for the bag 
  useEffect (() => {
    if(selectedPanier.length>0){
      localStorage.setItem('Panier',JSON.stringify(selectedPanier))
      // setPanier(selectedPanier)
    }
  }, [selectedPanier])

 useEffect(()=>{
    const savedPanier = localStorage.getItem('Panier')
    if(savedPanier){
      const parsePanier = JSON.parse(savedPanier)
      // setStorage(parsePanier)
      setPanier(parsePanier)
    }
  },[])

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
 
  // Debug logs (optionnal -remove for product)
useEffect(()=>{
  {console.log('mon panier contient:',selectedPanier)}
  {console.log('mon panier dans le localStorage contient:',localStorage.getItem('Panier'))}
  
})

return (
<div>
  <Category categories={categories} filter={selectedCategory} setFilter={setCategory} />
  <Cart dataApi={dataApi} filter={filterArray} setPanier={setPanier} selectedPanier={selectedPanier}/>
  <Panier selectedPanier={selectedPanier}/>
  
</div>
)

}


export default App
