import logo from '../assets/logo.png'
import '../stylesComponnents/Header-Style.css'
import { useState } from 'react'
const Header=({selectedPanier,setPanier})=>{

    const [open,setOpen] = useState(false)
    const total = selectedPanier.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    return(
        <div className='header-ecommerce'>
           <img src={logo} className='logoImg'/> 
           
    <div className='bag-price'>
        <button className='cursor-pointer' onClick={()=>
            setOpen(true)
        }>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-11 mr-11">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
        </button>
        
<span>{total.toFixed(2)}€</span></div>       

                        {/* partie modal bag */}
                        {open&&(
                            
                            <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
                                 onClick={()=> setOpen(false)}>

                                        <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4 relative flex flex-col" 
                                             onClick={(e)=>e.stopPropagation()}>
                                                    <button className="absolute top-4 right-4 text-2xl font-bold hover: text-red-500"
                                                            onClick={()=>setOpen(false)}>
                                                            x
                                                    </button>

                                                    <h2 className='mb-[10px]'>Mon Panier</h2>
                                                    {selectedPanier.length === 0 ?(
                                                        <p className="text-gray-500 text-center py-4">Votre panier est vide</p>
                                                    )
                                                     :
                                                        (
                                                            selectedPanier.map((item)=>(
                                                                                <div key={item.id} className='container-article mb-[5px]'>
                                                                                        <img src={item.image} className='image-itemBag w-16 h-16 object-cover' alt={item.title}/>
                                                                                        <div className="flex-1">
                                                                                        <h3>{item.title}</h3>
                                                                                        <span>{item.price}€</span>
                                                                                        </div>
                                                                                        {/* controle for quantity */}
                                                                                        <div className="flex items-center gap-2">          
                                                                                                    {/* bouton - */}
                                                                                                    <button onClick={()=>{
                                                                                                        if(item.quantity>1){
                                                                                                        // reduce the quantity 
                                                                                                        const newPanier = selectedPanier.map(article =>
                                                                                                            article.id === item.id
                                                                                                              ? { ...article, quantity: article.quantity - 1 }
                                                                                                              : article
                                                                                                        )
                                                                                                        setPanier(newPanier)
                                                                                                        localStorage.setItem('Panier', JSON.stringify(newPanier))
                                                                                                        }
                                                                                                        // if quantity = 1 remove the article
                                                                                                        else{
                                                                                                                const newPanier = selectedPanier.filter(article=> article.id !== item.id)
                                                                                                                setPanier(newPanier)
                                                                                                                localStorage.setItem('Panier',JSON.stringify(newPanier))
                                                                                                        }
                                                                                                     
                                                                                                    }} className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">-</button>
                                                                                            {/* show the  quantity */}
                                                                                            <span className="font-bold">{item.quantity}</span>
                                                                                                    
                                                                                                    {/* bouton + */}
                                                                                                    <button onClick={()=>{
                                                                                                            const newPanier = selectedPanier.map(article=>
                                                                                                                article.id === item.id
                                                                                                            ?{...article,quantity:article.quantity + 1}
                                                                                                            : article
                                                                                                            )
                                                                                                            setPanier(newPanier)
                                                                                                            localStorage.setItem('Panier',JSON.stringify(newPanier)) 
                                                                                                    }}
                                                                                                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400">    
                                                                                                    +</button>            
                                                                                        </div>

                                                                                        {/* bouton for delete the article */}
                                                                                        <button onClick={()=>{
                                                                                            const newPanier = selectedPanier.filter(article=>article.id !==item.id)
                                                                                            setPanier(newPanier)
                                                                                        localStorage.setItem('Panier'),JSON.stringify(newPanier)
                                                                                        }}>X</button>
                                                                                </div>
                                                            ))
                                                        )}

                                                        {/* Calcul total with quantity */}
                                                            {selectedPanier.length > 0 && (
                                                                
                                                            <div className="mt-4 pt-4 border-t">
                                                                <p className="text-xl font-bold">
                                                                Total: {selectedPanier.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}€
                                                                
                                                                </p>
                                                                
                                                               
                                                            
                                                            </div>
                                                            )}
                                                                                    {/* delete all bag */}
                                                                                    <button onClick={()=>{
                                                                                    localStorage.removeItem('Panier'),setPanier([])
                                                                                    }}>Vider mon panier</button>

                                        </div>
                            </div>
                        )
                            
                        }

        </div>
    )
}
export default Header