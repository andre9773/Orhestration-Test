import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'

const Container = styled.div`
   position: absolute;
    left: 40px;
    bottom: 12px;
`

const ProfileImg = styled.img`
    height: 2rem;
    border-radius: 50%;
`
const ProfileName = styled.h1`
    font-size: 0.8rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textColor};
`
const ProfileEmail = styled.h1`
    font-size: 0.8rem;
    font-weight: 100;
    color: ${({ theme }) => theme.textColor};
`
const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>Andrii Terytsia</ProfileName>
            <ProfileEmail>andrii@gmail.com</ProfileEmail>
        </Container>
    )
}

export default Profile