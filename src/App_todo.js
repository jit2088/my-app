import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


function App(){


    //const productsComponents = vschoolProducts.map(item=> <Product key= {item.id} name= {item.name} price = {item.price} description = {item.description}/>)
    const todosComponent = todosData.map(todo=> <TodoItem key = {todo.id} todo={todo}/>) 
    

    


    return (
        <div>
            {todosComponent}
        </div>
        
    )

}

export default App