import Axios from "axios";
import { useEffect, useState } from "react"

export default function Age(){

    const [name, setName] = useState("")
    const [predictAge, setPredictAngle]= useState(0)

    const fetchDataForm = () => {
        Axios.get(`https://api.agify.io/?name=${name}`). then((res) => {
            setPredictAngle(res.data)
        })
    }

    return(
       <div className="App">
        <input placeholder="Ex Pedro..." 
        onChange={(event) => {
            setName(event.target.value);
            }}
            />
        <br />
        <button onClick={fetchDataForm}>Predict Age</button>  
        
        <h1>Name: {predictAge?.name}</h1>
        <h1>Predict Age: {predictAge?.age}</h1>
        <h1>Count: {predictAge?.count}</h1>
       </div>
    )
}