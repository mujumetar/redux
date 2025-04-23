
import './App.css'
import { decCount, incCount } from './redux/action'

import { useDispatch, useSelector } from 'react-redux'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(incCount())} >+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decCount())}>-</button>
    </>
  )
}

export default App
