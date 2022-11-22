import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'
import './App.css'

function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">

      <h1>counter</h1>

      <div className="card">

        <p>Counter is {counter}</p>

        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
        Decrement
        </button>

        <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
        </button>
      </div>

    </div>
  )
}

export default App
