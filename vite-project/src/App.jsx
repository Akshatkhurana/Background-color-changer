import { useState } from "react"


function App() {
  const [color,setColor] = useState("white")
  return (
    <div className="w-full h-screen duration-300" 
    style={{backgroundColor:color}}> 
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2"> 
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}
            onClick={() => setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}
            onClick={() => setColor("Orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}
            onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}
            onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
