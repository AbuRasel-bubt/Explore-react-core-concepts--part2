import { useState } from "react"

export default function Team (){
    const [team , setTeam] =useState(11)

    const HandleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    const handleRemove = () =>{
        const removeTeam = team - 1;
        setTeam(removeTeam)
    }
    const teamStyle = {
        border : '2px solid orange',
        margin : '15px',
        padding : '15px',
        borderRadius : '15px'
    }
        return(

            <div style={teamStyle}>
                    <h1>Players : {team}</h1>
                    <button onClick={HandleAdd}>PlyearAdd</button>
                    <button onClick={handleRemove}>PlayerRemove</button>
            </div>
        )
}   