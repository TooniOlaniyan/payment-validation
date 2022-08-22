import React from 'react'
import styled from 'styled-components'
import Nav from '../shared/Nav'
import { Link } from 'react-router-dom'

function BillingInfo() {
  return (
    <Section>
      <Nav />
      <Info>
        <form>
          <MainLabel>
            <label htmlFor=''>Name On Card*</label>
            <input type='text' placeholder='Enter Name' />
          </MainLabel>
          <MainLabel>
            <label htmlFor=''>Card Type*</label>
            <select name='card' id='card'>
              <option value='Visa'>Visa</option>
              <option value='Mastercard'>Mastercard</option>
            </select>
          </MainLabel>
          <Details>
            <div className='cardDetails'>
              <label htmlFor=''>Card Details</label>
              <input type='text' />
            </div>
            <div className='expire'>
              <label htmlFor=''>Expiry date</label>
              <input type='text' placeholder='MM/YY' />
            </div>
            <div className='cvc'>
              <label htmlFor=''>CVV</label>
              <input type='tel' placeholder='CVC' />
            </div>
          </Details>
          <Links>
            <Link to='/confirm-payment'>
              <button>Next</button>
            </Link>
            <Link to='/'>
              <p>cancel Payment</p>
            </Link>
          </Links>
        </form>
      </Info>
    </Section>
  )
}

const Section = styled.div`
  padding: 5rem 0;
`
const MainLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.7rem;
  /* border: 2px solid red; */
  width: 100%;
  p {
    color: #817e9e;
    font-size: 12px;
  }
  label {
    color: #000;
    font-size: 15px;
    font-weight: 700;
  }

  input {
    padding: 1rem;
    width: 100%;
    font-size: 15px;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    border: 1px solid #4e598c;
    &:focus {
      outline: none;
    }
  }
  select {
    padding: 0.7rem 1rem;
    font-size: 15px;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    border: 1px solid #4e598c;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`
const Info = styled.div`
  /* border: 2px solid green; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
  margin: 4rem auto;
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
  @media screen and (max-width: 890px) {
    width: 70vw;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
  }
`
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  .cardDetails {
    flex: 7;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    input {
      padding: 0.7rem;
      width: 100%;
      font-size: 15px;
      background-color: #fff;
      border-radius: 10px;
      border: none;
      border: 1px solid #4e598c;
      &:focus {
        outline: none;
      }
    }
  }
  .expire {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    input {
      padding: 0.7rem;
      width: 100%;
      font-size: 15px;
      background-color: #fff;
      border-radius: 10px;
      border: none;
      border: 1px solid #4e598c;
      &:focus {
        outline: none;
      }
    }
  }
  .cvc {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    input {
      padding: 0.7rem;
      width: 100%;
      font-size: 15px;
      background-color: #fff;
      border-radius: 10px;
      border: none;
      border: 1px solid #4e598c;
      &:focus {
        outline: none;
      }
    }
  }

  label {
    color: #000;
    font-size: 15px;
    font-weight: 700;
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
  width: 100%;
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

export default BillingInfo