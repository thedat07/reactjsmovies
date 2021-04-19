import React from 'react'
import { Card } from 'antd'

class SystemComponent extends React.PureComponent {
    render() {
        return (
            <>
                <Card title="System" bordered={true}>
                    <p>Country : mu</p>
                    <p>Tam nhin xa: </p>
                    <p>Suc gio:</p>
                    <p>Binh Minh: 26</p>
                    <p>Hoang Hon</p>
                </Card>
            </>
        )
    }
}
export default SystemComponent