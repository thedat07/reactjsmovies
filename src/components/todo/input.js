import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// tao component input input bằng styled-componets
const InputComponent = styled.input`
    width: 300px;
    height: 24px;
    border: 1px solid pink;
    border-radius: 3px
`;
class InputTodo extends React.Component {
    render() {
        return (
            <>
                <InputComponent onChange={this.props.change} value={this.props.val}></InputComponent>
            </>
        )
    }
}
InputTodo.propTypes = {
    change: PropTypes.func.isRequired
}

export default InputTodo;
