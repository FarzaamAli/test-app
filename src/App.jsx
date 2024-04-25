import { useState } from 'react'
import {db} from '../src/config/firebase.config'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)
  console.log(db);
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}



export default App
