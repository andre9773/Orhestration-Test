import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';


const Container = styled.div`
  border-left: 3px solid ${props => props.active ? props.theme.activeMenu : "transparent"};
    width: 100%;
    padding: 0.3rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: rgba(0,0,0,0.1);
    }
`

const Span = `
    /* color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    color: ${props => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;
    margin-left: 9px;
`

const Title = styled.a`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${props => props.active ? props.theme.activeMenu : "#AAA5A5"};
    margin-left: 9px;
`

const MenuItem = ({title, active, href}) => {
  return (
    <Container active={active}>
        <Icon active={active} icon="fa:chain" style={{ color: `${props => !props.active && props.theme.textColor}`}} />
    
            <Title href={href} active={active}>{title}</Title>
    </Container>
    
  )
}

export default MenuItem