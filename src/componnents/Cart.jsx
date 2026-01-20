
const Cart=({dataApi,filter})=>{
 
    return(
        <>
        {console.log('donner dans cart',dataApi)}
        <ul>
          { (filter ? filter : dataApi).map(mydata =>
            <li key={mydata.id}>{mydata.title}</li>
          )}
          </ul>
        </>
    )
}
export default Cart