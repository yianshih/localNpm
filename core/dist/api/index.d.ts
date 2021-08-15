import { Book } from "../domain/domain-book";
export declare type GetBook = Promise<ApiResponse<Book[]>>;
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    success: boolean;
}
//# sourceMappingURL=index.d.ts.map