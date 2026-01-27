import { useState } from "react";

function Form() {
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product) {
      const newTodo = {
        id: Date.now(),
        packed: false,
        product,
        quantity,
      };
      console.log(newTodo);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
        className="select"
      >
        <option value="" disabled selected hidden>
          Qty.
        </option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
        }}
        placeholder="Add Item..."
      />
      <button className="button" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
