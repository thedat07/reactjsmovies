import React from 'react'
import { Card, Row, Col, Skeleton } from 'antd';
import PropTypes from 'prop-types'

class GlobalCorona extends React.PureComponent {

    render() {
        if (this.props.loading || this.props.virus.length === 0) {
            return (<Skeleton active />)
        }
        return (
            <>
                <Row style={{ marginTop: '20px' }}>
                    <Col span={8}>
                        <Card title="Confirmed" bordered={true}>
                            <p>New Confirmed: {this.props.virus.Global.NewConfirmed}</p>
                            <p>Total Confirmed: {this.props.virus.Global.TotalConfirmed}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Deaths" bordered={true} >
                            <p>New Deaths: {this.props.virus.Global.NewDeaths}</p>
                            <p>Total Deaths: {this.props.virus.Global.TotalDeaths}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Recovered" bordered={true} >
                            <p>New Recovered: {this.props.virus.Global.NewRecovered}</p>
                            <p>Total Recovered: {this.props.virus.Global.TotalRecovered}</p>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}
GlobalCorona.propTypes = {
    loading: PropTypes.bool,
    //virus: PropTypes.object.isRequired
}
export default GlobalCorona