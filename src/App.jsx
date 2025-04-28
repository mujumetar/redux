
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { decCount, incCount, resetCount } from './toolkit/counterSlice'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(incCount())} >+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decCount())}>-</button>
      <button onClick={() => dispatch(resetCount())}>Reset</button>
    </>
  )
}

export default App
