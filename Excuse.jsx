import Axios from "axios";
import { useEffect, useState } from "react"

export default function Excuse(){
    const [generatedExcuse, setGeneratedExcuse] = useState([])

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`). then((res)=>{
            setGeneratedExcuse(res.data[0].excuse)
        })
    }
    return(
        <div className="App">
        <h1>GENERATE AN EXCUSE FOR THE FOLLOWING: </h1>
        <button onClick={() => fetchExcuse("family")}>family</button>
            <br />
        <button onClick={() => fetchExcuse("office")}>office</button>
            <br />
        <button onClick={() => fetchExcuse("party")}>party</button>

        <p>{generatedExcuse}</p>

        {/* <h1>Family: {excuse?.family}</h1>
        <h1>Office: {excuse?.office}</h1>
        <h1>Party: {excuse?.party}</h1> */}
        </div>
    )
}