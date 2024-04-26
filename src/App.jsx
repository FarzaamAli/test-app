import { useState } from 'react'
import {db} from '../src/config/firebase.config'
import './App.css'
import Header from './components/header/UserHeader'
import Home from './components/pages/Home'

function App() {
  const [count, setCount] = useState(0)
  console.log(db);
  return (
    <>
      <Home/>
    </>
  )
}



export default App
