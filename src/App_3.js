import React from "react"
import Product from "./Product"
import vschoolProducts from "./vschoolProducts"
//import Joke from "./Joke"
//import jokesData from "./jokesData"

function App(){

    //const productComponents = productsData.map(item => <Product  key = {item.id} product ={item.name}/>)
    //const jokeComponents = jokesData.map(joke=> <Joke key ={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
    const productsComponents = vschoolProducts.map(item=> <Product key= {item.id} name= {item.name} price = {item.price} description = {item.description}/>)
        return(

           <div>
               {productsComponents}
           </div>
        )
    

}

export default App
