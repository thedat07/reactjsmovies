import React from 'react';
import ButtonCounter from '../components/counter/button'
import Result from '../components/counter/result'
import HeaderCompoent from '../components/counter/header'
import './counter.css'

class CounterApp extends React.Component {

    constructor(props) {
        super(props);
        // khai state
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        // cap nhat gia tri state count + 1
        // this.state.count = 1; //error 
        this.setState({
            //lay lai state truoc khi thay doi
            ...this.state,
            count: this.state.count + 1
        })
        // this.setState((state, props) => {
        //     return {
        //         count: state.count + 1
        //     }
        // })
    }
    viewIncrementCount = () => {
        this.incrementCount();
        this.incrementCount();
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <HeaderCompoent></HeaderCompoent>
                    <Result count={this.state.count}></Result>
                    <ButtonCounter
                        type="button"
                        click={this.viewIncrementCount}>+</ButtonCounter>
                    <ButtonCounter
                        type="button"
                        click={this.decrementCount}>-</ButtonCounter>
                </div>
            </>
        )
    }
}
export default CounterApp;