import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {appContainer, board, buttons} from "./App.css.ts";
import BoardList from "./components/BoardList/BoardList.tsx";
import ListsContainer from "./components/ListsContainer/ListsContainer.tsx";
import {useTypedSelector} from "./hooks/redux.ts";

function App() {
  const [count, setCount] = useState(0)
    const [activeBoardId, setActiveBoardId] = useState('board-0')

    const boards = useTypedSelector(state => state.boards.boardArray)

    const getActiveBoard = boards.filter(board=>board.boardId === activeBoardId)[0]

    const lists = getActiveBoard.lists;

  return (
    <div className={appContainer}>
        <BoardList
            activeBoardId={activeBoardId}
            setActiveBoardId={setActiveBoardId}
        />

      <div className={board}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId}/>
      </div>
      <div className={buttons}>
        <button>이 게시판 삭제하기</button>
      </div>
    </div>
  )
}

export default App
