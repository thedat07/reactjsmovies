import React from 'react'
import GlobalCorona from './components/global'
import Countries from './components/countries'
import { Row, Col } from 'antd'
import CoronaProvider from './context/corona-provider'

const CoronaApp = () => {
    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                    <CoronaProvider>
                        <GlobalCorona></GlobalCorona>
                        <Countries></Countries>
                    </CoronaProvider>
                </Col>
            </Row>
        </>
    )

}
export default CoronaApp;