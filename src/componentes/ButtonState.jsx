import { useState } from "react"

const ButtonState = () => {

    const [count, setCount] = useState(1)

    const handleClick = () => {
        setCount(count + 1 )
   
    }

    return <button onClick={handleClick}> {count} </button>
}

export default ButtonState