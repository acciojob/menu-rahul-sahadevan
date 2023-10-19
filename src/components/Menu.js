import React,{useState} from "react";

function Menu({setCatogory}){  
   
    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <div className="menu-heading">
                <p onClick={()=>setCatogory("all")}>All</p>
                <p onClick={()=>setCatogory("breakfast")}>Breakfast</p>
                <p onClick={()=>setCatogory("lunch")}>Lunch</p>
                <p onClick={()=>setCatogory("shakes")}>Shakes</p>
            </div>
           
            
        </div>
    )
}
export default Menu;