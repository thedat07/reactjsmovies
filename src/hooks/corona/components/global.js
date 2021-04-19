import React, { useContext } from 'react'
import { Card, Row, Col, Skeleton } from 'antd';
import CoronaContext from '../context/index'

const GlobalCorona = () => {
    const data = useContext(CoronaContext)
    if (data.loading || data.virus.length === 0) {
        return (<Skeleton active />)
    }
    return (
        <Row style={{ marginTop: '20px' }}>
            <Col span={8}>
                <Card title="Confirmed" bordered={true}>
                    <p>New Confirmed: {data.virus.Global.NewConfirmed}</p>
                    <p>Total Confirmed: {data.virus.Global.TotalConfirmed}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Deaths" bordered={true} >
                    <p>New Deaths: {data.virus.Global.NewDeaths}</p>
                    <p>Total Deaths: {data.virus.Global.TotalDeaths}</p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Recovered" bordered={true} >
                    <p>New Recovered: {data.virus.Global.NewRecovered}</p>
                    <p>Total Recovered: {data.virus.Global.TotalRecovered}</p>
                </Card>
            </Col>
        </Row>
    )
}
export default React.memo(GlobalCorona)