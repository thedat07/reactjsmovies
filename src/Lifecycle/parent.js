import React from 'react'
import ChildComponent from './child'
class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show: true
        }
        console.log('constructor ParentComponent da chay');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps props parent', props);
        console.log('getDerivedStateFromProps state parent', state);
        // co muon cap nhat state tu props hay ko
        return null;
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    componentDidMount() {
        // chay sau khi render
        // call server api - xu ly logic sau khi dom da dc xu ly xong
        // chi chay duy nhat 1 lan
        console.log('componentDidMount of parent component runing')
    }
    showHideComponent = () => {
        this.setState({ show: !this.state.show  });
    }
    render() {
        console.log('render parent component da chay')
        return (
            <>
                <h1>This Parent Component:{this.state.count}</h1>
                <button type="button" onClick={() => this.incrementCount()}>+</button>
                <br></br>
                <br></br>
                {this.state.show ? <ChildComponent counter={this.state.count}></ChildComponent> : null}
                <br></br>
                <br></br>
                <button type='button' onClick={() => this.showHideComponent()}>show/hide ChildComponent</button>
            </>
        )
    }
}
export default ParentComponent