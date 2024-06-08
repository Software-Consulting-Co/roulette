import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Wheel from './components/Wheel';

export default  (props) => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Wheel />
    </>
  )
}
