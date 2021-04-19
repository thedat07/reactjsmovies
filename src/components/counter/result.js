import React from 'react';
import PropTypes from 'prop-types';
class Result extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
            </>
        )
    }
}
Result.propTypes = {
    count: PropTypes.number,
}
Result.defaultProps={
    count:"0-0"
}
export default Result;