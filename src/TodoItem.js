import React from "react"

import todosData from "./todosData";

function TodoItem(props){

    return(

        <div className="todo-item">
        
            <input type="checkbox" checked={props.item.completed} onChange={()=>console.log("Changed!")}/>
            <p>{props.item.text}</p>
            
        
        
        </div>
    )
}

export default TodoItem


// import React from "react"

// function Product (props){

//     return(

//         <div>
//             <h2>Name: {props.name}</h2>
//             <p>Price: {props.price}</p>
//             <p>Description: {props.description}</p>
//             <hr/>
//         </div>
//     )
// }

// export default Product