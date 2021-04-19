import React,  {useContext} from 'react'
import { Table, Skeleton } from 'antd';
import CoronaContext from '../context/index'
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
const Countries = () => {
    const data = useContext(CoronaContext)
    if (data.loading || data.virus.length === 0) {
        return (<Skeleton active />)
    }
    return (
        <Table style={{ marginTop: '20px' }} columns={columns} dataSource={data.virus.Countries} rowKey="CountryCode" />
    )
}
export default React.memo(Countries)