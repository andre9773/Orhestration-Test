import React from 'react';

class Contact extends React.Component{
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
                <h1>One more chain</h1>
            </>
        )
    }
}

export default Contact;