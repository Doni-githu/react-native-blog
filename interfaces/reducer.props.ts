import { Dispatch, ReactNode, ReducerAction } from "react";
import { IBlogStates, IUserStates } from "./state.interface";

export interface IReducerProps {
    children: ReactNode
}

export interface IBlogContextValue {
    state: IBlogStates,
    dispatch: Dispatch<ReducerAction<any>>
}

export interface IAuthContextValue {
    state?: IUserStates,
    dispatch?: Dispatch<any>
}