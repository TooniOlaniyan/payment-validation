import React from 'react'
import styled from 'styled-components'
import Nav from '../shared/Nav'

function BillingInfo() {
  return (
    <Section>
      <Nav />
    </Section>
  )
}

const Section = styled.div`
  padding: 5rem 0;
`

export default BillingInfo