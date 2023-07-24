import { useState } from "react";

export default function Counter({ totalCount, handleTotalCount }) {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((prev) => prev + 1)
  const handleClickEvent = () => {
    handleCount()
    handleTotalCount()
  }

  return (
    <div className='counter'>
      <span className='count'>{count} / {totalCount}</span>
      <button className='add-button' onClick={handleClickEvent}>Add</button>
    </div>
  )
}