import React,{useState} from "react";
import Dishes from "./Items";


function Menudisplay({catagory}){
    let [items,setItems] = useState(Dishes);
    console.log(catagory)
    return (
        <div id="menu" className="menu-div">
        {
                items.map(item=>(
                    (item.category === catagory || catagory === "all") && (
                        <div data-set-id={catagory} className="item-card">
                            <h1>{item.title}</h1>
                            <p>{item.price}</p>
                            <p>{item.desc}</p>
                        </div>
                    )
                )
            )
        }
        </div>

    )


}
export default Menudisplay;