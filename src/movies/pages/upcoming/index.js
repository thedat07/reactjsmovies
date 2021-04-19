import React, { useState } from 'react'
import { Row, Col, DatePicker } from 'antd'
import MasterLayoutMovies from '../../components/master-layout'
import { api } from '../../services/api'
import ListMovie from '../../components/list-movies'
import PaginasionMovie from '../../components/pagination'
import { helper } from '../../helpers/common'
const { RangePicker } = DatePicker;
const UpcomingPage = () => {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [comingMovies, setComingMovies] = useState({});
    const [totalPage, setTotalPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [fDate, setFDate] = useState('');
    const [tDate, setTDate] = useState('');

    const chooseTime = async (t1, t2, p = 1 ) => {
        setLoading(true);
        setPage(p)
        let fromDate = t2[0];
        let toDate = t2[1];
        let data = await api.getDataComingMovie(fromDate, toDate, page);
        if (data.hasOwnProperty('results')) {
            setFDate(fromDate);
            setTDate(toDate);
            setComingMovies(data.results);
            setTotalPage(data.total_pages);
            setTotalItems(data.total_results)
        }
        setLoading(false);
    }
    return (
        <MasterLayoutMovies>
            <Row>
                <Col span={24}>
                    <RangePicker onChange={(d1, d2) => chooseTime(d1, d2)} />
                </Col>
            </Row>
            {
                !loading
                && !helper.isEmptyObject(comingMovies)
                && <ListMovie
                    loading={loading}
                    movies={comingMovies} />
            }
            {
                !loading
                && !helper.isEmptyObject(comingMovies)
                && <PaginasionMovie
                    current={page}
                    total={totalItems}
                    totalPage={totalPage}
                    fDate={fDate}
                    tDate={tDate}
                    change={chooseTime}
                />
            }
        </MasterLayoutMovies>
    )
}
export default React.memo(UpcomingPage)