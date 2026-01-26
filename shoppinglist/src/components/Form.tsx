function Form() {
  return (
    <form>
      <select>
        <option value="" disabled selected hidden>
          Qty.
        </option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Add Item..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
