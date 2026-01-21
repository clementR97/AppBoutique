
const Cart=({dataApi,filter,setPanier,selectedPanier})=>{
 


    return(
        <>
        {console.log('donner dans cart',dataApi)}
        <ul>
          { (filter ? filter : dataApi).map(mydata =>
            <li key={mydata.id} value={mydata}>
                {mydata.title}
                
                <button onClick={()=>{setPanier([
                    ...(selectedPanier || []),
                        {title:mydata.title,
                        price:mydata.price}
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