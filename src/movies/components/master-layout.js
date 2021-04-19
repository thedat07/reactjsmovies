import React from 'react'
import { Layout } from 'antd';
import HeaderMovie from './header'
import FooterMovie from './footer'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SiteLayoutContent = styled.div`
min-height: 280px;
padding: 15px;
background: #fff;
`;
const { Content } = Layout;

const MasterLayoutMovies = (props) => {
    return (
        <Layout>
            <HeaderMovie />
            <Content style={{ padding: '0px 50px' }}>
                <SiteLayoutContent>
                    {props.children}
                </SiteLayoutContent>
            </Content>
            <FooterMovie />
        </Layout>
    )
}
MasterLayoutMovies.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(MasterLayoutMovies)