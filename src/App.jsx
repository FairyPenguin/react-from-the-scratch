import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input/Input.jsx'
import Table from './components/Table/Table.jsx'
import Form from './components/Form/Form.jsx'
import Paragraph from './components/Paragraph/Paragraph.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Paragraph who="Props" Time="2" />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}  
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Form />
      <Table />
      <Input />
    </>
  )
}

export default App
