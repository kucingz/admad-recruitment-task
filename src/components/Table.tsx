import { SearchResultModel } from '../api/types';

interface ITableProps {
    moviesInfo: SearchResultModel[];
}
const Table = ({ moviesInfo }: ITableProps) => {
    return (
        <div className='relative overflow-x-auto mt-4 '>
            <table className='w-full text-sm text-left rounded-lg overflow-hidden  rtl:text-right text-gray-500 dark:text-gray-400 '>
                <thead className=' text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Title
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Year
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Country
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Type
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {moviesInfo.map((movieInfo, i) => (
                        <tr
                            key={i}
                            className='dark:bg-gray-800 dark:border-gray-700'>
                            <td className='px-6 py-4'>{movieInfo.Title}</td>
                            <td className='px-6 py-4'>{movieInfo.Year}</td>
                            <td className='px-6 py-4'>{movieInfo.Country}</td>
                            <td className='px-6 py-4'>{movieInfo.Type}</td>
                            <td className='px-6 py-4'>
                                {movieInfo.imdbRating}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
