import { useReducer, createContext, useEffect } from "react"
import { IAction } from "../interfaces/action.interface"
import { IReducerProps } from "../interfaces/reducer.props"
import { IUserStates } from "../interfaces/state.interface"
import { Redirect, useRouter } from "expo-router"
export const AuthContext = createContext({})
const initialState: IUserStates = {
    user: null,
    isLoading: false,
}




function reducer(state = initialState, actions: IAction) {
    switch (actions.type) {
        case "LOGIN":
            return { ...state, user: actions.payload }
        default:
            return state
    }
}
export function AuthReducer({ children }: IReducerProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const router = useRouter()
    useEffect(() => {
        if (!state.user) {
            router.replace('/login')
        }
    }, [])
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

}