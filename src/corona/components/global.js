import React from 'react'
import { Card, Row, Col, Skeleton } from 'antd';
import MyContext from '../context/MyContext'

class GlobalCorona extends React.PureComponent {

    render() {
        return (

            <MyContext.Consumer>
                { context => {
                    if (context.loading || context.virus.length === 0) {
                        return (<Skeleton active></Skeleton>)
                    }
                    return (
                        <>
                            <Row style={{ marginTop: '20px' }}>
                                <Col span={8}>
                                    <Card title="Confirmed" bordered={true}>
                                        <p>New Confirmed: {context.virus.Global.NewConfirmed}</p>
                                        <p>Total Confirmed: {context.virus.Global.TotalConfirmed}</p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Deaths" bordered={true} >
                                        <p>New Deaths: {context.virus.Global.NewDeaths}</p>
                                        <p>Total Deaths: {context.virus.Global.TotalDeaths}</p>
                                    </Card>
                                </Col>
                                <Col span={8}>
                                    <Card title="Recovered" bordered={true} >
                                        <p>New Recovered: {context.virus.Global.NewRecovered}</p>
                                        <p>Total Recovered: {context.virus.Global.TotalRecovered}</p>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )
                }}

            </MyContext.Consumer>
        )
    }
}
export default GlobalCorona