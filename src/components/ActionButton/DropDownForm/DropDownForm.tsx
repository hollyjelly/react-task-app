import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import {FiX} from "react-icons/fi";
import {useTypedDispatch} from "../../../hooks/redux.ts";
import {addList, addTask} from "../../../store/slices/boardsSlice.ts";
import {v4 as uuidv4} from 'uuid';
import {addLog} from "../../../store/slices/loggerSlice.ts";
import {button, buttons, close, input, listForm, taskForm} from "./DropDownForm.css.ts";

type TDropDownFormProps = {
    boardId: string;
    listId: string;
    setIsFormOpen: (value: boolean) => void;
    list?: boolean
}

const DropDownForm: FC<TDropDownFormProps> = ({boardId, list, listId, setIsFormOpen}) => {
    const [text, setText] = useState('')
    const formPlaceholder = list? "리스트의 제목을 입력하세요": "일의 제목을 입력하세요."
    const dispatch = useTypedDispatch();
    const buttonTitle = list? "리스트 추가하기": "일 추가하기"
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }
    const handleButtonClick = () => {
        if(text) {
            if(list) {
                dispatch(
                    addList({
                        boardId,
                        list: {listId: uuidv4(), listName: text, tasks: []}
                    })
                )

                dispatch(
                    addLog({
                        logId: uuidv4(),
                        logMessage: `리스트 생성하기: ${text}`,
                        logAuthor: "User",
                        logTimestamp: String(Date.now())
                    })
                )

                return
            }

            dispatch(
                addTask({
                    boardId,
                    listId,
                    task: {
                        taskId: uuidv4(),
                        taskName: text,
                        taskDescription: "",
                        taskOwner: "User"
                    }
                })
            )

            dispatch(
                addLog({
                    logId: uuidv4(),
                    logMessage: `일 생성하기: ${text}`,
                    logAuthor: "User",
                    logTimestamp: String(Date.now())
                })
            )
        }
    }

    return(
        <div className={list? listForm: taskForm}>
            <textarea
                className={input}
                value={text}
                autoFocus
                onChange={handleTextChange}
                placeholder={formPlaceholder}
            />
            <div className={buttons}>
                <button
                    className={button}
                    onMouseDown={handleButtonClick}>
                    {buttonTitle}
                </button>
                <FiX className={close} onMouseDown={() => setIsFormOpen(false)}/>
            </div>
        </div>
    )
}

export default DropDownForm