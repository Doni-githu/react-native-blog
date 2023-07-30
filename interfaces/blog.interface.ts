import { IAction } from "./action.interface";
import { CreatedUser } from "./user.interface";

export interface CreatedBlog {
    _id: string,
    title: string,
    body: string,
    src: string | File,
    user: CreatedUser
}

interface IUpdateBlog extends Omit<CreatedBlog, "_id"> { }

interface IUpdatePayload {
    id: string,
    data: IUpdateBlog
}

export interface IDeleteAction extends Omit<IUpdateAction, "data"> { }

export interface IUpdateAction extends IAction {
    payload: IUpdatePayload
}