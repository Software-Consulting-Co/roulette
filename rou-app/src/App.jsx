import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Wheel from './components/Wheel';
import EmailDialog from './components/EmailDialog';

function hasEnteredEmail() {
  return !!localStorage.getItem('custom-email');
}
 
export default  (props) => {
  const [count, setCount] = useState(0);

  let email = hasEnteredEmail();

  return (
    <>
    {email && (<Wheel />)}
    {!email && (<EmailDialog onSubmit={() => setCount(count+1)} />)}
    </>
  )
}
