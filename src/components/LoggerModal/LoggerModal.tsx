import React, {FC} from 'react'
import {useTypedSelector} from "../../hooks/redux.ts";
import {FiX} from "react-icons/fi";
import LogItem from "./LogItem/LogItem.tsx";
import {body, closeButton, header, modalWindow, title, wrapper} from "./LoggerModal.css.ts";

type TLoggerModalProps = {
    setIsLoggerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogerModal:FC<TLoggerModalProps> = ({setIsLoggerOpen}) => {
    const logs = useTypedSelector(state => state.loger.logArray)

    return(
        <div className={wrapper}>
            <div className={modalWindow}>
                <div className={header}>
                    <div className={title}>활동 기록</div>
                    <FiX className={closeButton} onClick={() => setIsLoggerOpen(false)}/>
                </div>
                <div className={body}>
                    {logs.map((log, index) => (
                        <LogItem key={log.logId} logItem={log}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogerModal