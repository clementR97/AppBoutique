import { useEffect } from "react"

const Cart=({dataApi,filter,setPanier,selectedPanier})=>{
  // Debug log (optionnel - à retirer en production)
  useEffect(() => {
    console.log('donner dans cart', dataApi)
  }, [dataApi])

    return(
        <>
        <ul>
          { (filter ? filter : dataApi).map(mydata =>
            <li key={mydata.id} value={mydata}>
                {mydata.title}
                
                <button onClick={()=>{setPanier([
                    ...selectedPanier,
                            {   id:mydata.id,
                                title:mydata.title,
                                price:mydata.price
                            }
                        ])
                     }}>
                     Ajouter
                </button>
            </li>
          )}
          </ul>

         
        </>
    )
}
export default Cart