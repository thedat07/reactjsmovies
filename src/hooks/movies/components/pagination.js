import { Row, Col, Pagination } from 'antd';

const PaginationMovies = (props) => {
    return (
        <Row style={{ margin: '30px 0px' }}>
            <Col span={24} style={{ textAlign: 'center' }}>
                <Pagination 
                current={props.curruntPage}
                 total={props.totalItems}
                 pageSize={props.pageSize}
                 showSizeChanger={false}
                 onChange={(p)=> props.changePage(p)}></Pagination>
            </Col>
        </Row>
    )
}
export default PaginationMovies;