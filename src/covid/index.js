import React from 'react'
import GlobalCorona from './components/global'
import Countries from './components/countries'
import { Row, Col } from 'antd'
import { apiCovid } from './services/api'

class CoronaApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            virus: []
        }
    }
    async componentDidMount() {
        this.setState({ loading: true });
        const dataVirus = await apiCovid.getDataFromApi();
        if (dataVirus) {
            this.setState({ virus: dataVirus })
        }
        this.setState({ loading: false });
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={20} offset={2}>
                        <GlobalCorona
                            loading={this.state.loading}
                            virus={this.state.virus}
                        ></GlobalCorona>
                        <Countries
                            loading={this.state.loading}
                            virus={this.state.virus}
                        ></Countries>
                    </Col>
                </Row>
            </>
        )
    }
}
export default CoronaApp;