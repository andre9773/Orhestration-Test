import React,{Component} from 'react';

            
export default class Btn extends Component{
    constructor(props){
        console.clear();
        console.log('constructor');
        console.log(props);
        super();
        
        this.state = {
            text: props.text
        }
    }

    onChangeText = () =>{
        console.log('onChangeText');
        let val = this.state.text;
        val++;
        this.setState({
            text: val
        })
    }

    static getDerivedStateFromProps(props, state){
        console.log('static');
        return ({text: 6});
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidMount');
    }
render(){
    let text = this.state.text;
    console.log('render');
    return(
        <>
        <button  onClick={this.onChangeText}>push</button>
        <div>
            <p >{text}</p>
        </div>
        
        </>
    );
}
}