import { Book } from "../domain/domain-book";

export type GetBook = Promise<ApiResponse<Book[]>>

export interface ApiResponse<T> {
    data?:T
    error?:string
    success:boolean
}