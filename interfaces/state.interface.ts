import { CreatedBlog } from "./blog.interface";
import { CreatedUser } from "./user.interface";

export interface IUserStates {
    user: null | CreatedUser,
    isLoading: boolean
}

export interface IBlogStates {
    blogs: CreatedBlog[],
    isLoading: boolean
}