import React from 'react';
import styled from 'styled-components';
import PropTypes, { array } from 'prop-types';
import './todo.css'
// tao component input input bằng styled-componets
class ListTodo extends React.Component {
    render() {
        return (
            <>
                {this.props.list.map((item, index) => (
                    <li key={index} style={{ marginTop: '8px', listStyle: 'none' }}>
                        <input type='checkbox' onClick={() => this.props.finish(item.id)}></input>
                        <span className={item.done ? 'delete':''}> {item.name} </span>
                        <button style={{ marginLeft: '5px' }}
                            onClick={() => this.props.remove(item.id)}>X</button>
                    </li>
                ))}
            </>
        )
    }
}
ListTodo.propTypes = {
    list: PropTypes.array,
    remove: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired
}
export default ListTodo;