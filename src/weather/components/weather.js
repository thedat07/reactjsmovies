import React from 'react'
import { Card } from 'antd'

class Weather extends React.PureComponent {
    render() {
        return (
            <>
                <Card title="Weather" bordered={true}>
                    <p>Thoi tiet : mu</p>
                    <p>Chu thich: 26</p>
                    <p></p>
                </Card>
            </>
        )
    }
}
export default Weather