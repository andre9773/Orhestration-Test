import React,{useInsertionEffect, useState} from "react";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function Test2(props){
    console.log('render2');

    const [text, setText] = useState(props.text);

    const onChangeText = () =>{
        console.log('onChangeText');
        let val = text;
        val++;
        setText(val);
    }

     
    return(
        <>
        <button onClick={onChangeText}>push2</button>
        <div>
            <p >{text}</p>
        </div>
       
        </>
    )
}

export default Test2;