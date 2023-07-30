import { createContext, useReducer } from "react"
import { IBlogStates } from "../interfaces/state.interface"
import { IAction } from "../interfaces/action.interface"
import { CreatedBlog, IDeleteAction, IUpdateAction } from "../interfaces/blog.interface"
import { IReducerProps } from "../interfaces/reducer.props"

export const BlogContext = createContext({})

const initialState: IBlogStates = {
    blogs: [],
    isLoading: false
}


function reducer(state = initialState, actions: IAction) {
    switch (actions.type) {
        case "MAKE_BLOG":
            return { ...state, blogs: [...state.blogs, actions.payload] }
        case "UPDATE_BLOG":
            const { payload } = actions as IUpdateAction
            const newBlogs = state.blogs.map((item) => {
                if (item._id === payload.id) {
                    return {
                        _id: item._id,
                        ...payload.data
                    }
                }
                return item
            })
            return { ...state, blogs: newBlogs }
        case "DELETE_BLOG":
            const { payload: { id } } = actions as IDeleteAction
            const removeOne = state.blogs.filter(c => c._id !== id)
            return { ...state, blogs: removeOne }
        default:
            break;
    }
}

export function BlogReducer({ children }: IReducerProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}