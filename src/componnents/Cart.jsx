import { useEffect } from "react"

const Cart=({dataApi,filter,setPanier,selectedPanier})=>{
  // Debug log (optionnel - à retirer en production)
  useEffect(() => {
    console.log('donner dans cart', dataApi)
  }, [dataApi])

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
                <button className="border rounded-sm w-full bg-slate-500 text-white hover:bg-white hover:text-black transition">Voir +</button>
            </li>
          )}
          </ul>

         
        </div>
    )
}
export default Cart