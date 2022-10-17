import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            s1: 2
        }
    }

    test = () =>{
        let val = this.state.s1
        val++;
        this.setState({s1: 3})

    }


    render(){
        return(
            <>
                <h1>Test test</h1>
                
            </>
        )
    }
}

export default Home;