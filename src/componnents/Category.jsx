
const Category=({categories,filter,setFilter})=>{



    
    return(
        <>
        <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)}>
            <option value=''>---</option>
        {categories.map((cat)=>(
            <option key={cat} value={cat}> {cat}</option>
        ))}

        </select>
        </>
    )
}
export default Category