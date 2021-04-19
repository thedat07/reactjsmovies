import React from 'react'

class ChildComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            c: 0,
            color: 'red'
        }
        console.log('constructor cua ChildComponent da chay');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('props getDerivedStateFromProps ChildComponent', props);
        console.log('state getDerivedStateFromProps ChildComponent', state);
        // co muon cap nhat state tu props hay ko
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps getDerivedStateFromProps ChildComponent', nextProps);
        console.log('nextState getDerivedStateFromProps ChildComponent', nextState);
        // co muon cap nhat state tu props hay ko
        //return false;
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        // lan cuoi xu ly state hay props o day truoc khi update lai
        console.log('nextProps getSnapshotBeforeUpdate', prevProps);
        console.log('prevState getSnapshotBeforeUpdate', prevState);
        return 10;
    }
    decrementCount = () => {
        this.setState({ c: this.state.c - 1, color: 'blue'})
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        //this.setState({color:'yellow'});
        document.getElementById('text').style.color ='green';
    }
    componentWillUnmount(){
        console.log('child da bi xoa')
    }
    render() {
        console.log('render child component da chay')
        return (
            <>
                <h2 id="text" style={{color:this.state.color}}>This child Component:{this.state.c}</h2>
                <button type="button" onClick={() => this.decrementCount()}>-</button>
            </>
        )
    }

    
}
export default ChildComponent