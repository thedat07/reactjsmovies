import { useState } from 'react'
import SearchMovie from './components/search'
import ListMovie from './components/list-movie'
import PaginationMovies from './components/pagination'
import { helpers } from './helpers/common'
import { apiMovie } from './services/api'

const AppMovie = () => {
    const [loading, setLoading] = useState(false);
    const [dataMovie, setDataMovie] = useState({});
    const [page, setPage] = useState(1);
    const [keyword, setKeyWord] = useState("");
    const [totalItems, setTotalItems] = useState(0)

    const searchFilm = async (movieName = '', p = 1) => {
        setLoading(true);
        setKeyWord(movieName);
        setPage(p);
        const data = await apiMovie.searchMovieByKeyword(movieName, p);
        if (!helpers.isEmptyObject(data)) {
            if (data.hasOwnProperty('results')) {
                setDataMovie(data.results);
                setTotalItems(data.total_results)
            }
        }
        setLoading(false)
    }
    return (
        <>
            <SearchMovie
                loading={loading}
                search={searchFilm}
            />
            {
                !loading &&
                !helpers.isEmptyObject(dataMovie) &&
                <ListMovie dataMovie={dataMovie} />
            }
            {
                !loading &&
                !helpers.isEmptyObject(dataMovie) &&
                <PaginationMovies
                    search={searchFilm}
                    name={keyword}
                    current={page}
                    pageSize={20}
                    total={totalItems}
                ></PaginationMovies>
            }
        </>
    )
}
export default AppMovie