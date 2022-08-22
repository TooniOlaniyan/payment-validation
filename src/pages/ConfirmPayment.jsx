import React from 'react'
import styled from 'styled-components'
import Nav from '../shared/Nav'

function ConfirmPayment() {
  return (
    <Section>
      <Nav />
      <Info>

      </Info>
    </Section>
  )
}
const Section = styled.div`
  padding: 5rem 0;
`

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
  margin: 4rem auto;
`;

export default ConfirmPayment