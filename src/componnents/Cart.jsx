import { useEffect,useState,Component } from "react"

const Cart=({dataApi,filter,setPanier,selectedPanier})=>{
  // Debug log (optionnel - à retirer en production)
  useEffect(() => {
    console.log('donner dans cart', dataApi)
  }, [dataApi])

  const [open,setOpen] = useState(false)
 const [productSelect, setproductSelect] = useState (null)
 
 

    return(
        <div className="flex">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          { (filter ? filter : dataApi).map(mydata =>
            <li key={mydata.id} value={mydata} className="border rounded-lg p-10 shadow-sm hover:shadow-md transition">
                 <img src={mydata.image}/>
                <h2>{mydata.title}</h2>
                <h3>{mydata.price}€</h3>
                
                <button onClick={()=>{setPanier([
                    ...selectedPanier,
                            {   id:mydata.id,
                                title:mydata.title,
                                price:mydata.price
                            }
                        ])
                     }}  className="border rounded-sm w-full bg-slate-500 text-white hover:bg-white hover:text-black transition">
                     Ajouter
                </button>
                <button onClick={()=>{
                  // handleOpen()
                  setOpen(true)
                  setproductSelect(mydata)
                }} 
                  variant="gradient" className="border rounded-sm w-full bg-slate-500 text-white hover:bg-white hover:text-black transition">Voir +</button>
            </li>
          )}
          </ul>
          {/* modal part */}
          {open&& productSelect&&(
            <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
                                          <div className="img-container">
                                            <img src={productSelect.image} />
                                          </div>

                                                  {/* partie containe title,description and price */}
                                                  <div className="info-container">
                                                          <h2>{productSelect.title}</h2>
                                                          <span>{productSelect.description}</span>
                                                          <span>{productSelect.price}€</span>
                                                          
                                                          <button onClick={()=>{setPanier([
                                                            ...selectedPanier,
                                                                    {   id:productSelect.id,
                                                                        title:productSelect.title,
                                                                        price:productSelect.price
                                                                    }
                                                                ])
                                                                setOpen(false)
                                                            }}  className="border rounded-sm w-full bg-slate-500 text-white hover:bg-white hover:text-black transition">
                                                            Ajouter
                                                        </button>
                                                  </div>
                          </div>

            </div>
          )}
          
        </div>
       
    )
}
export default Cart