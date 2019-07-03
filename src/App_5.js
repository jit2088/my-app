import React ,{Component} from "react"

class App extends Component{
    constructor(){
        super()
        
        this.state={

            name: "Sally",
            age: 13
        }
    }
    render(){
        return(
            <div>
                <h1>What's your name? {this.state.name}</h1>
                <h3>{this.state.age} year of old</h3>
            </div>
        )
    }
}

export default App