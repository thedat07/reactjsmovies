import React from 'react'
import { Layout } from 'antd';

const {  Footer } = Layout;
const FooterMovie = () => {
    return (
        <Footer style={{ textAlign: 'center' }}>Ant Mobies ©2021 Created by Ant UED</Footer>
    )
}
export default React.memo(FooterMovie)