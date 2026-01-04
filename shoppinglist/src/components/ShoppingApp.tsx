import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./main";


type Item = {
    id: number
    name: string
    quantity: number
    product: string
}

export default function ShoppingApp() {

    const [items, setItems] = useState<Item[]>([])

  return (
    <>
        <Header />
        <Main />
        <Footer />
       
    </>
  )
}