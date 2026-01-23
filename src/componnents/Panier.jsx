const Panier=({selectedPanier,setPanier})=>{

    
    
return (
<>
<div>
    <h3>Panier</h3>
    <ul>
        {selectedPanier.map((item)=>(
            <li key={item.id}>
                {item.title},{item.price}
                </li>
        ))}
        
    </ul>
    <button onClick={()=>{
        localStorage.removeItem('Panier'),setPanier([])
        }}>Vider le panier</button>
</div>
</>
)
}
export default Panier