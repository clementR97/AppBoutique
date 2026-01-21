const Panier=({selectedPanier})=>{

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
</div>
</>
)
}
export default Panier