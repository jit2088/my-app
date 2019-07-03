import React from "react"

function Product (props){

    return(

        <div>
            <h2>Name: {props.name}</h2>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
            <hr/>
        </div>
    )
}

export default Product