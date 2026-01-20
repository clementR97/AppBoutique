
const Cart=({dataApi})=>{
 
    return(
        <>
        {console.log('donner dans cart',dataApi)}
        <ul>
          {dataApi.map(mydata =>
            <li key={mydata.id}>{mydata.title}</li>
          )}
          </ul>
        </>
    )
}
export default Cart