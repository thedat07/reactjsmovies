import React from 'react'
import { Row, Col } from 'antd'
import MasterLayoutMovies from '../../components/master-layout'

const SearchPage = () => {
    return (
        <MasterLayoutMovies>
            <Row>
                <Col>
                    <h1>This is Search Movie</h1>
                </Col>
            </Row>
        </MasterLayoutMovies>
    )
}
export default React.memo(SearchPage)