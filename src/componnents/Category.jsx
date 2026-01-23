
const Category=({categories,filter,setFilter})=>{



    
    return(
        <div className="flex justify-center mt-2 mb-2">
        <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)} className="bg-slate-400 text-stone-50 ">
            <option value=''>---Category---</option>
        {categories.map((cat)=>(
            <option key={cat} value={cat}> {cat}</option>
        ))}

        </select>
        </div>
    )
}
export default Category



