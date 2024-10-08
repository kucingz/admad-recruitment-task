//The api returns a lot more fields, but for the purpose of the assignment I create types for the ones I need, o make it more readable :)
export type BaseResponseType = {
    Response: string;
    Error?: string;
};
export type SearchResultModel = {
    Title: string;
    Year: string;
    Country: string;
    Genre: string;
    Type: string;
    imdbRating: string;
};
