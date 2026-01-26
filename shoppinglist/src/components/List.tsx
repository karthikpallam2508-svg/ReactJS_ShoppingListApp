import type { ShopItem } from "./types.ts";

type ListProps = {
  item: ShopItem;
};

export default function List({ item }: ListProps) {
  const { product, quantity, packed } = item;

  return (
    <li className="listWrapper">
      {/* <p>{packed && " ✅"}</p> */}
      <p style={packed ? { textDecoration: "line-through" } : {}}>
        {product} - {quantity}
      </p>
      <div className="btnWrapper">
        <button className="doneBtn">Done</button>
        <button className="deleteBtn">Delete</button>
      </div>
    </li>
  );
}
