import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)

    return (
        <div className='counter'>
            <span className='count'>{ count }</span>
            <button className='add-button' onClick={ handleClick }>Add</button>
        </div>
    )
}
