import React from 'react'
import { Table, Skeleton } from 'antd';
import MyContext from '../context/MyContext'
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
const data = []
class Countries extends React.Component {

    render() {
        return (
            <MyContext.Consumer>
                { context => {
                    if (context.loading || context.virus.length === 0) {
                        return (<Skeleton active></Skeleton>)
                    }
                    return (
                        <Table style={{ marginTop: '20px' }} columns={columns} dataSource={context.virus.Countries} rowKey="CountryCode" />
                    )
                }}

            </MyContext.Consumer>



        )
    }
}
export default Countries