import {useTypedSelector} from "./redux.ts";

export function useAuth() {
    const {id, email} = useTypedSelector((state) => state.user)

    return {
        isAuth: !!email,
        email,
        id
    }
}