import React from 'react'
import { Row, Col } from 'antd'
import SystemComponent from './components/system'
import Weather from './components/weather'
import MainWeather from './components/main-weather'
import WeatherProvider from './context/weather-provider'
class AppWeather extends React.Component {
    render() {
        return (
            <WeatherProvider>
                <Row style={{ marginTop: '30px' }}>
                    <Col span={20} offset={2}>
                        <Row>
                            <Col span={8}><SystemComponent></SystemComponent></Col>
                            <Col span={8}><MainWeather></MainWeather></Col>
                            <Col span={8}><Weather></Weather></Col>
                        </Row>
                    </Col>
                </Row>
            </WeatherProvider>
        )
    }
}
export default AppWeather