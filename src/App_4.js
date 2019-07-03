import React from "react"

// function App(){
//     return(
//         <div>

//             <h1>Code gooes here</h1>
//         </div>
//     )
// }

class App extends React.Component{
        
    yourMethodHere(){

    }
    render(){
            
        
            const date = new Date();

            return(
                <div>

                 <h1>{this.props.whatever}}</h1>

                </div>
            )
        }
}
export default App