import Counter from './components/Counter'
import './App.css'
import { useState } from "react";

function AppCounter() {
  const [totalCount, setTotalCount] = useState(0);
  const handleTotalCount = () => setTotalCount((prev) => prev + 1)

  return (
    <>
      <div className='total-count'>
        <span className='total-count-title'>Total Count: {totalCount}</span>
        <span className='total-count-desc'>{totalCount < 10 ? '❄' : '🎇'}</span>
      </div>
      <Counter totalCount={totalCount} handleTotalCount={handleTotalCount}/>
      <Counter totalCount={totalCount} handleTotalCount={handleTotalCount}/>
    </>
  );
}

export default AppCounter;