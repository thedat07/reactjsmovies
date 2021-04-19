import React, { useState, useEffect } from 'react'
import { Row, Col, Skeleton, Image, Button } from 'antd'
import { useParams } from 'react-router-dom'
import MasterLayoutMovies from '../../components/master-layout'
import { api } from '../../services/api'
import { helper } from '../../helpers/common'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

const DetailMovie = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMovieById(id);
            if (!helper.isEmptyObject(data)) {
                setMovie(data);
            }
            setLoading(false)
        }
        getData();
    }, [id]);
    if (loading) {
        return (
            <MasterLayoutMovies>
                <Skeleton active></Skeleton>
            </MasterLayoutMovies>
        )
    }
    if (!loading && helper.isEmptyObject(movie)) {
        return (
            <MasterLayoutMovies>
                <h1>Not found movie</h1>
            </MasterLayoutMovies>
        )
    }
    return (
        <MasterLayoutMovies>
            <Row>
                <Col span={8}>
                    <Image src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}></Image>
                    <h1>{movie.original_title}</h1>
                    <p>Release date: {movie.release_date}</p>
                </Col>
                <Col span={8}>
                    <h2>{movie.title}</h2>
                    <p>Content:{movie.overview}</p>
                    <p>Vote average: {movie.vote_average}</p>
                    <p>Vote average: {movie.vote_count}</p>
                    {
                        helper.checkTrailerVideo(movie.videos)
                        &&
                        (
                            <>
                                <Button
                                    type="primary"
                                    onClick={() => setOpen(true)}
                                >View trailer</Button>
                                <ModalVideo
                                    channel='youtube'
                                    autoplay isOpen={isOpen}
                                    videoId={movie.videos.results[0].key}
                                    onClose={() => setOpen(false)}
                                />
                            </>
                        )
                    }
                </Col>
                <Col span={8}>
                    {movie.images.backdrops.map((item, index) => (
                        <Image
                            key={index}
                            src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
                        ></Image>
                    ))}
                </Col>
            </Row>
        </MasterLayoutMovies>
    )
}
export default React.memo(DetailMovie)