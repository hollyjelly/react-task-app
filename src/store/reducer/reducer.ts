import {loggerReducer} from "../slices/loggerSlice.ts";
import {boardsReducer} from "../slices/boardsSlice.ts";
import {modalReducer} from "../slices/modalSlice.ts";
import {userReducer} from "../slices/userSlice.ts";

const reducer = {
    loger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer,
    user: userReducer
}

export default reducer