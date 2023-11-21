import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	return (
		<div className='app'>
			<h1>Counting: {count}</h1>
			<div className='buttons'>
				<button onClick={() => setCount(Math.floor(Math.random() * 100))}>Random</button>
				<button onClick={() => setCount(0)}>Reset</button>
				<button onClick={() => setCount(count - 1)}>Dec</button>
				<button onClick={() => setCount(count + 1)}>Inc</button>
			</div>
		</div>
	)
}

export default App
