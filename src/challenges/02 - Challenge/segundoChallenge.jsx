import React from 'react'
import {useState} from "react"

const FirstApp = () => {
    const [counter, setcounter] = useState(0)
    
    return(

        <div>
            <h1>Counter</h1>
            <span>{counter}</span>
            <button onClick={ () => setcounter(counter +1 )}> +1</button>
            <button onClick={ () => setcounter(counter - 1 )}> -1</button>
            <button onClick={ () =>  setcounter(0)}> reset</button>
        </div>
    )


}

export default FirstApp