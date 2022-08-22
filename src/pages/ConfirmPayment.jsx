import React from 'react'
import styled from 'styled-components'
import Nav from '../shared/Nav'
import { Link } from 'react-router-dom'

function ConfirmPayment() {
  return (
    <Section>
      <Nav />
      <Info>
        <Blue>
          <p>Item Name</p>
          <p>&#x20A6; &nbsp;Price </p>
        </Blue>
        <div className='calculate'>
          <Split>
            <p>Data science and usability</p>
            <p>50,000.00</p>
          </Split>
          <Split>
            <p>Shipping</p>
            <p>0.00</p>
          </Split>
          {/* <div className='line'></div> */}
          <Total>
            <p>Total</p>
            <p>50,000.00</p>
          </Total>
        </div>
      </Info>
      <Links>
        <Link to='/confirmed'>
          <button>Pay</button>
        </Link>
        <Link to='/'>
          <p>cancel Payment</p>
        </Link>
      </Links>
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
  border-radius: 10px;
  box-shadow: 0px 10px 15px rgba(33, 30, 67, 0.08);
  background-color: white;
  flex-direction: column;
  
  .calculate {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 10px;
    padding: 3rem 2rem;
  }
`
const Links = styled.div`
  a {
    text-decoration: none;
  }
  p {
    color: #4e598c;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  display: flex;
  width: 40vw;
  margin: 4rem auto;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  button {
    padding: 0.8rem 5rem;
    border-radius: 10px;
    background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
    color: white;
    font-size: 15px;
    border: none;
    cursor: pointer;
  }
`
const Blue = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #2f80ed;
  padding: 1rem;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  p {
    font-size: 18px;
    font-weight: 700;
    color: white;
  }
`
const Split = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #817e9e;
  padding: 1rem;
  border-radius: 5px;
`

export default ConfirmPayment