// import React from "react";

// function App() {

//   function handleClick(){
//     alert('Button Clicked')
//   }

//   return(
//     <div>

//       <button onClick={handleClick}>Greeting</button>

//     </div>
//   )
// }

// export default App

// ---------------------

//  Example 2

// import { useState } from "react";

// function App() {

//   const[isFollowed,setIsFollowed] = useState(false)

//   return (
//     <div>
//       <button onClick={()=> setIsFollowed(!isFollowed)}>
//         {isFollowed ? "Following" : "Follow"}
//       </button>
//     </div>
//   )
// }

// export default App

// Example 3 - live search

import { useState } from "react";

function App(){

  const[text,setText] = useState("")

  return(
    <div>
      <input 
      placeholder="Search..." 
      onChange={ (e)=> setText(e.target.value) } 
      />

      <h3>You Typed : {text}</h3>

    </div>
  )
}

export default App