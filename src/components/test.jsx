import React from 'react'
import useWindowResize from '.'

const UseWindowResizeTest = () => {

  const windowSize = useWindowResize();
  const {width , height } = windowSize;

  return (
    <div>
      <h1>Use Window Rsize Hook</h1>
      <p>
        Width is {width} px
      </p>
      <p>
        Height is {height} px
      </p>
    </div>
  )
}

export default UseWindowResizeTest