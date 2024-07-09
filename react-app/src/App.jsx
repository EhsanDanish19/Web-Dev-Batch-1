import { useState } from 'react'
import './App.css'
import SignUp from './components/Register'
import LoginForm from './components/Login'
import Counter from './components/counter'
import CompA from './components/CompA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignUp />
      <LoginForm/>
      <Counter/> */}

<CompA/>
    </>
    )
}

export default App
