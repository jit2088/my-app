import React from "react"
import Joke from "./Joke"


function App(){

    return(
      <div>
          <Joke 
                answer="I don't know, but the flag is a big plus!"
          />
               
          
          <Joke question="what's the best thing about Switzerland?" 
                answer="I don't know, but the flag is a big plus!"
          />
          <Joke question="what's the best thing about Switzerland?" 
                answer="I don't know, but the flag is a big plus!"
          />
          <Joke question="what's the best thing about Switzerland?" 
                answer="I don't know, but the flag is a big plus!"
          />
          


      </div>

    )

}

export default App


// import Header from "./components/Header"
// // import MainContent from "./components/MainContent"
// // import Footer from "./components/Footer"
// import ContactCard from "./components/ContactCard"


// function App() {
//   return (
//     <div className = "contacts">

      
//       <ContactCard 
//       contact={{name: "Mr.W", imgUrl: "http://placekitten.com/300/200", phone:"12345678", email: "whiskaz@catnap.neow"}}
//       /> 
      
//       <ContactCard 
//       contact={{name: "Mr.W", imgUrl: "http://placekitten.com/100/200", phone:"12345678", email: "whiskaz@catnap.neow"}}
//       /> 

//       <ContactCard 
//       contact={{name: "Mr.W", imgUrl: "http://placekitten.com/300/400", phone:"12345678", email: "whiskaz@catnap.neow"}}
//       />       
      
//    </div>


//   )
// }

// export default App;
