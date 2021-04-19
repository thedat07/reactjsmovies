import React from 'react'
import { Row, Col } from 'antd'
import MasterLayoutMovies from '../../components/master-layout'

const PopularPage = () => {
    return (
        <MasterLayoutMovies>
            <Row>
                <Col>
                    <h1>This is Popular Movie</h1>
                </Col>
            </Row>
        </MasterLayoutMovies>
    )
}
export default React.memo(PopularPage)