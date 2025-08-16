import { useState } from 'react'
import pfp from './assets/pfp.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className="bg-white shadow-md p-4 flex justify-around">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <div>
        <img src={pfp} className="pfp" alt="Profile Picture" />
        <p>Hello! I'm Joshua Cheng, a software developer with a passion for creating innovative solutions and learning new technologies. Welcome to my personal website!</p>
      </div>
      <hr></hr>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr></hr>
      <footer className="bg-white shadow-md p-4 text-center">
        <p>&copy; 2025 Joshua Cheng. Built using Vite + React.</p>
      </footer>
    </>
  )
}

export default App
