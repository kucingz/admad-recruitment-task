import api from '../api';
import { SearchResultModel, BaseResponseType } from '../types';

const getMovie = async (
    title: string,
    type: string
): Promise<SearchResultModel> => {
    try {
        const response = await api.get(``, {
            params: {
                t: title,
                type: type,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
const getMovieList = async (
    title: string,
    type: string
): Promise<{ Search: SearchResultModel[] } & BaseResponseType> => {
    try {
        const response = await api.get(``, {
            params: {
                s: title,
                type: type,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const omdbService = {
    getMovie,
    getMovieList,
};
