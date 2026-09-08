import Axios from "axios";
import { useEffect, useState } from "react"

export default function Cats(){
    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     });

        const[catFacts, setCatFacts] = useState ("")

        const fetchCatFact = () => {
            Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFacts(res.data.fact)
        });
        }

        useEffect(() => {
          fetchCatFact();
        }, [])

    return(
       <div className="App">
        <button onClick={fetchCatFact}>Generate Cat Facts</button>
        <p> {catFacts} </p>
       </div>
    )
}