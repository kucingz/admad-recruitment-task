import { useEffect, useState } from 'react';
import { omdbService } from './api/services/OMDBService';
import { SearchResultModel } from './api/types';
import Loader from './components/Loader';
import Search from './components/Search';
import Table from './components/Table';

function App() {
    const [selectedType, setSelectedType] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [moviesInfo, setMoviesInfo] = useState<SearchResultModel[]>();
    const [movieList, setMovieList] = useState<SearchResultModel[]>();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };
    const handleSearchValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const result = await omdbService.getMovieList(
            searchValue,
            selectedType
        );
        if (result.Error && result.Response === 'False') {
            setIsLoading(false);
            setErrorMessage(result.Error);
        } else {
            setErrorMessage('');
            setMovieList(result.Search);
        }
    };

    useEffect(() => {
        if (movieList && movieList.length > 0) {
            const getMovieInfo = movieList.map(async (movieInfo) => {
                return omdbService.getMovie(movieInfo.Title, movieInfo.Type);
            });
            if (getMovieInfo) {
                Promise.all(getMovieInfo).then((result) => {
                    setMoviesInfo(result);
                    setIsLoading(false);
                });
            }
        }
    }, [movieList]);

    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100 '>
            <div className='relative items-center block  w-full min-h-[650px] max-w-[800px] mx-auto p-4 bg-white shadow-md rounded-lg width '>
                <Search
                    handleSearchValueChange={handleSearchValueChange}
                    searchValue={searchValue}
                    selectedOption={selectedType}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
                <p className='text-center ...'>{errorMessage}</p>
                {isLoading && <Loader />}
                {!errorMessage && moviesInfo && moviesInfo.length > 0 && (
                    <Table moviesInfo={moviesInfo} />
                )}
            </div>
        </div>
    );
}

export default App;
