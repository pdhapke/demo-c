'use client'
import {useState} from 'react'

export default function Home() {
  const [pressed, setPressed] = useState(false)


  const onButtonPress = () => {
    setPressed(true);
  };


  return (
    <main>
      <h1>Hello ISU - This is a github pages test</h1>

      <button onClick={onButtonPress}>Press Me</button>
      {pressed && <p>You pressed the BUTTON</p>}
    </main>
  )
}
