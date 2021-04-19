import React from 'react'
import { Table, Skeleton } from 'antd';
import PropTypes from 'prop-types'
const columns = [
    {
        title: "Country",
        dataIndex: "Country",
        key: "Country"
    },
    {
        title: "Country Code",
        dataIndex: "CountryCode",
        key: "CountryCode"
    },
    {
        title: "New Confirmed",
        dataIndex: "NewConfirmed",
        key: "NewConfirmed"
    },
    {
        title: "Total Confirmed",
        dataIndex: "TotalConfirmed",
        key: "TotalConfirmed"
    },
    {
        title: "New Deaths",
        dataIndex: "NewDeaths",
        key: "NewDeaths"
    },
    {
        title: "Total Deaths",
        dataIndex: "TotalDeaths",
        key: "TotalDeaths"
    },
    {
        title: "New Recovered",
        dataIndex: "NewRecovered",
        key: "NewRecovered"
    },
    {
        title: "Total Recovered",
        dataIndex: "TotalRecovered",
        key: "TotalRecovered"
    }
];

class Countries extends React.Component {

    render() {
        if (this.props.loading || this.props.virus.length === 0) {
            return (<Skeleton active />)
        }
        return (
            <>
                <Table style={{ marginTop: '20px' }} columns={columns} dataSource={this.props.virus.Countries} rowKey="CountryCode" />
            </>
        )
    }
}
Countries.propTypes = {
    loading: PropTypes.bool,
    //virus: PropTypes.object.isRequired
}
export default Countries