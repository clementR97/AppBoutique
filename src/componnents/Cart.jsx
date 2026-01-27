import { useEffect,useState } from "react"
// import  '../stylesComponnents/Cart-Style.css'

const Cart=({dataApi,filter,setPanier,selectedPanier})=>{
  // Debug log (optionnel - à retirer en production)
  useEffect(() => {
    console.log('donner dans cart', dataApi)
  }, [dataApi])

  const [open,setOpen] = useState(false)
 const [productSelect, setproductSelect] = useState (null)
 
 

    return(
        <div className="flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          { (filter ? filter : dataApi).map(mydata =>
            <li key={mydata.id} value={mydata} className="border bg-stone-500 rounded-lg p-10 shadow-sm hover:shadow-md transition flex flex-col justify-center items-center ">
                 <img src={mydata.image} className="w-64 h-auto"/>
                <h2>{mydata.title}</h2>
                <h3>{mydata.price}€</h3>
                
                <button onClick={()=>{
                  
                  // verify if article existe in the bag
                  const exitingItem = selectedPanier.find(item=>item.id === mydata.id)

                  if(exitingItem){
                    // if the article existe quantity+=1
                    const newPanier = selectedPanier.map(item=>
                      item.id === mydata.id
                      ?{...item,quantity:item.quantity+1}
                      : item
                    )
                    setPanier(newPanier)
                    localStorage.setItem('Panier',JSON.stringify(newPanier))
                  }
                  // for article is new quantity:1
                  else{

                  }
                  const newPanier = [
                    ...selectedPanier,
                            {   id:mydata.id,
                                title:mydata.title,
                                price:mydata.price,
                                image:mydata.image,
                                quantity:1
                            }
                            
                  ]
                  setPanier(newPanier)
                  localStorage.setItem('Panier',JSON.stringify(newPanier))
                  // setPanier([
                  //   ...selectedPanier,
                  //           {   id:mydata.id,
                  //               title:mydata.title,
                  //               price:mydata.price,
                  //               image:mydata.image
                  //           }
                  //       ])
                     }}  className="border mb-4 rounded-sm w-full bg-slate-500 text-white hover:bg-stone-500 hover:text-black transition">
                     Ajouter
                </button>
                <button onClick={()=>{
                  // handleOpen()
                  setOpen(true)
                  setproductSelect(mydata)
                }} 
                  variant="gradient" className="border rounded-sm w-full bg-slate-500 text-white hover:bg-stone-500 hover:text-black transition">Voir +</button>
            </li>
          )}
          </ul>
          {/* modal part */}
          {open&& productSelect&&(
            <div 
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
                        onClick={()=> setOpen(false)}
                        >
                          <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 relative flex"
                          // 
                           onClick={(e)=>e.stopPropagation()}>  
                            
                            <button className="absolute top-4 right-4 text-2xl font-bold hover: text-red-500"
                            onClick={()=>setOpen(false)}>
                              x
                            </button>
                                          {/* partie containe image*/}
                                          <div className="img-container flex justify-center items-center">
                                            <img src={productSelect.image} />
                                          </div>

                                                  {/* partie containe title,description and price */}
                                                  <article className="info-container text-wrap">
                                                          <h2 className="uppercase">{productSelect.title}</h2>
                                                          <p className="indent-8 leading-relaxed "> {productSelect.description} </p>
                                                          <span>{productSelect.price}€</span>
                                                          
                                                          <button onClick={()=>{setPanier([
                                                            ...selectedPanier,
                                                                    {   id:productSelect.id,
                                                                        title:productSelect.title,
                                                                        price:productSelect.price,
                                                                        image:productSelect.image
                                                                    }
                                                                ])
                                                                setOpen(false)
                                                            }}  className="border rounded-sm w-full bg-slate-500 text-white hover:bg-white hover:text-black transition">
                                                            Ajouter
                                                        </button>
                                                  </article>
                          </div>

            </div>
          )}
          
        </div>
       
    )
}
export default Cart