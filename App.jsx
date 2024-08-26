import './App.css'
import Counter from '../Counter'
import Team from '../team'
import Friends from '../Friends'
import Users from '../Users'
function App() {
  // general function
  // function handleClick(){
  //   alert("button click")
  // }
  
  // const handleClick2 = () =>{
  //     alert("button click 2")
  // }

  // const handleClick4 = (num) =>{
  //     alert(num + 5)
  // }

  return (
    <>
      
      <h1>React Core concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      
      
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>button 2</button>
      <button onClick={() =>{alert("click third button")}}>Third</button>
      <button onClick={()=>handleClick4(5)}>Four</button> */}

    </>
  )
}

export default App
