import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Home from '../../pages/Home'


import TestTest from '../../pages/Test-test';
import OneMoreChain from '../../pages/One-more-chain';



const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`
let component 
// eslint-disable-next-line default-case
switch (window.location.pathname) {
  case "/":
    component = <Home/>
    break;
    case "/Test-test":
      component = <TestTest/>
      break;
    case "/One-more-chain":
      component = <OneMoreChain/>
      break;
}



const Main = () => {
  return (
    <Container>
      <Nav/>
      {component}
    </Container>
  )
}

export default Main