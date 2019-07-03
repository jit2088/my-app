import React from "react"

function Conditional(props){
    return(
        <div>
            <h1> Header </h1>
           { props.isLoading === true ?  <h1>Loading ...</h1> : <h1> Some cool stuff about conditional rendering </h1> }
            <footer>footer </footer>
       </div>
        )
    
}

export default Conditional