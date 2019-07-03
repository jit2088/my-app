import React from "react"

class App extends React.Component{

    constructor(){
        super()

        this.state={
            isLoggedIn: true
            
        }

    }
    render(){

        let wordDisplay
        if(this.state.isLoggedIn){
            wordDisplay ="in"
        }else{
            wordDisplay="out"
        }
    return(
        <div>
            <h1>Your are currently logged (in/out) {wordDisplay}</h1>
        </div>
    )
    }
}

export default App