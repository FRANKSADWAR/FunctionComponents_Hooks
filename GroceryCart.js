import React, {useState} from "react";
import ReactDOM from  "react-dom";
import ItemList from "./ItemList";
import {produce, pantryItems} from "./storeItems";

function GroceryCart(){
    // declare and initialize the state
    const [cart,setCart] = useState([]);

    // add an event handler for adding an item to the cart
    const addItem = (item) => {
        setCart((prev)=>{
            return [item, ...prev]
        });
    };
    
    // add an event listener for removing the clicked item from the list
    /**
     * The filter method is used to remove the item from our state that's located
     * at the index of the item that was clicked in our list
     * 
     */
    const removeItem = (target) => {
        setCart((prev) => {
            return prev.filter((prev,index)=> index !==targetIndex);
        });
    };
    /**
     * Props are passed when the components are being rendered
     */
    return (
        <div>
            <h1>Grocery Cart</h1>
            <ul>
                { cart.map((item,index)=>(
                    <li onClick={()=> removeItem(index)} key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <h2>Produce</h2>
            <ItemList items={produce} onItemClick={addItem} />
            <h2>Pantry Items</h2>
            <ItemList items={pantryItems} onItemClick = {addItem} />
        </div>
    )
}

ReactDOM.render(<GroceryCart/>, document.getElementById("app"));
