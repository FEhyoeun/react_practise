import React, { useEffect, useState } from 'react';
import './AppXY.css';

function AppXy() {
  const [pointerStyleObj, setPointerStyleObj] = useState({})

  const handleMouseMove = (e) => {
    const { pageX, pageY } = e
    setPointerStyleObj({ pageX, pageY })
  }

  useEffect(() => {
    // 최적화를 어떻게?
  }, [pointerStyleObj]);

  return (
    <>
      <div className='container' onPointerMove={handleMouseMove}>
        <div
          className='pointer'
          style={{ 'left': pointerStyleObj.pageX, 'top': pointerStyleObj.pageY }}>
        </div>
      </div>
    </>
  );
}

export default AppXy;