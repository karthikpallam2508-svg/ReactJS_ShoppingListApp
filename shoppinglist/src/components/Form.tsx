function Form() {   
    return (
        <form>
            <select>
               {[...Array(10)].map((_,i) => (
                  <option key={i} value={i+1}>{i+1}</option>
               ))}
             </select>
            <input type="text" placeholder="Add Item..." />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form
