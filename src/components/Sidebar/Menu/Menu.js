import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'


const Container = styled.div`
  margin-top: 2rem;
  width:100%;
`

const Menu = () => {
  return (
   <Container>
      <MenuItem href="/" title="Chain 1" active />
      <MenuItem href="/Test-test" title="Test test" />
      <MenuItem href="/One-more-chain" title="One more chain" />
      <MenuItem title="Chaine 3299" />
      
   </Container>
        

  )
}

export default Menu