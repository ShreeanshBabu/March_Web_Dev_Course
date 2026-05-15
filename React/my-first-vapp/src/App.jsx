// Example 1 - Normal Js Variable

// import React from "react";

// function App(){

//   let count = 0

//   function increase(){
//     count = count + 1 
//     console.log(count)
//   }

//   return(
//     <div>
//       <h2>Count is {count} </h2>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// export default App

// Example 2 - useState is Hook React - Special Variable in React Which stores updated Value and update Screen as well
// import { useState } from "react";

// function App(){

//   const [count,setCount] = useState(0)

//   function add(){
//     setCount(count+1)
//     console.log(count)
//   }

//   return(
//     <div>
//       <h2>Like {count}</h2>
//       <button onClick={add}>Add</button>
//     </div>
//   )

// }

// export default App


// Example 3 - Show Password / Hide
import { useState } from "react";

function App(){

  const [show,setShow] = useState(false)

  return(
    <div>
      <input type={show ? "text" : "password"} placeholder="Enter Your Password" />
      <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  )

}

export default App