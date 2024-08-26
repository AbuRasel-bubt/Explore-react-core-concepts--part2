import { useState } from "react"

 export default function Counter(){

        function handleAdd(){
            const newCount = count +1;
            setCount(newCount)
        }

        const handleReduce = () => {
            const newCount = count -1;
            setCount(newCount)
        }

        const [count, setCount] = useState(0)
     return(
     <div style={{border: '2px solid tomato'}}>
            <h2>Counter : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
    </div> 
     )
}