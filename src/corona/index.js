import React from 'react'
import GlobalCorona from './components/global'
import Countries from './components/countries'
import { Row, Col } from 'antd'
import CoronaProvider from './context/CoronaProvider'

class CoronaApp extends React.Component {
    render() {
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
}
export default CoronaApp;