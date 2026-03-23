import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {appContainer, board, buttons} from "./App.css.ts";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={appContainer}>
      <div className={board}>

      </div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
      </div>
    </div>
  )
}

export default App
