import React from 'react';
import styled from 'styled-components';

// tao component input input bằng styled-componets
const ButtonComponent = styled.button`
    width: 50px;
    height: 28px;
    border-radius: 3px;
    backgroud-color: red;
    color: green;
    padding: 3px;
`;
class ButtonTodo extends React.Component {
    render() {
        return (
            <>
                <ButtonComponent onClick={() => this.props.click()}>{this.props.children}</ButtonComponent>
            </>
        )
    }
}
export default ButtonTodo;