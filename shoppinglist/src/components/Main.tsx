import shoppingList from "../data/data";
import List from "./List";
import Form from "./Form";

function Main() {
  return (
    <>
      {/* <Form/>
            <p>This is the main content of the shopping list application.</p>
             <p>Quantity</p>
             <p>Input</p>
             <p>Button</p> */}

      <Form />
      <ul className="mainWrapper">
        {shoppingList.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default Main;
