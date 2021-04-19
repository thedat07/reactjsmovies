import { useState, useEffect } from 'react'
import { apiCovid } from '../services/api'
import CoronaContext from './index'
import PropTyper from 'prop-types'
const CoronaProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [virus, setDataVirus] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await apiCovid.getDataFromApi();
            if (data) {
                setDataVirus(data);
            }
            setLoading(false);
        }
        getData();
    }, []);
    return(
        <CoronaContext.Provider value={{loading, virus}}>
            {props.children}
        </CoronaContext.Provider>
    )
}
CoronaProvider.propTyper={
    children: PropTyper.node.isRequired
}
export default CoronaProvider