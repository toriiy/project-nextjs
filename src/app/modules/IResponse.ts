import {IMovie} from "@/app/modules/IMovie";

export interface IResponse {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}