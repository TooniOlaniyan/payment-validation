import React from 'react'
import Nav from '../shared/Nav'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
function PersonalInfo() {
  return (
    <Section>
      <Nav />
      <Info>
        <form>
          <MainLabel>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' />
          </MainLabel>
          <MainLabel>
            <label htmlFor=''>Email Address*</label>
            <p>The purchase reciept would be sent to this address</p>
            <input type='email' placeholder='Enter Email' />
          </MainLabel>
          <MainLabel>
            <label htmlFor=''>Address 1</label>
            <input type='text' placeholder='Enter Address' />
          </MainLabel>
          <MainLabel>
            <label htmlFor=''>Address 2</label>
            <input type='text' placeholder='Enter remaining address here' />
          </MainLabel>
          <LocalGov>
            <div className='local'>
              <label htmlFor=''>Local Government</label>
              <input type='text' placeholder='Enter LGA' />
            </div>
            <div className='other'>
              <label htmlFor=''>State</label>
              <select name='state' id='state'>
                <option>ABUJA FCT</option>
                <option>ABIA</option>
                <option>ADAMAWA</option>
                <option>AKWA IBOM</option>
                <option>ANAMBRA</option>
                <option>BAUCHI</option>
                <option>BAYELSA</option>
                <option>BENUE</option>
                <option>BORNO</option>
                <option>CROSS RIVER</option>
                <option>DELTA</option>
                <option>EBONYI</option>
                <option>EDO</option>
                <option>EKITI</option>
                <option>ENUGU</option>
                <option>GOMBE</option>
                <option>IMO</option>
                <option>JIGAWA</option>
                <option>KADUNA</option>
                <option>KANO</option>
                <option>KATSINA</option>
                <option>KEBBI</option>
                <option>KOGI</option>
                <option>KWARA</option>
                <option>LAGOS</option>
                <option>NASSARAWA</option>
                <option>NIGER</option>
                <option>OGUN</option>
                <option>ONDO</option>
                <option>OSUN</option>
                <option>OYO</option>
                <option>PLATEAU</option>
                <option>RIVERS</option>
                <option>SOKOTO</option>
                <option>TARABA</option>
                <option>YOBE</option>
                <option>ZAMFARA</option>
              </select>
            </div>
          </LocalGov>

          <Links>
            <Link to='/billing-info'>
              <button>Next</button>
            </Link>
            <Link to='/'><p>cancel Payment</p></Link>

          </Links>
        </form>
      </Info>
    </Section>
  )
}

const Section = styled.div`
  padding: 5rem 0;
  
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

  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
  }
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
`

const LocalGov = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  .other {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
    flex: 3;
    label {
      color: #000;
      font-size: 15px;
      font-weight: 700;
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
  }
  .local {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.4rem;
    flex: 5;

    label {
      color: #000;
      font-size: 15px;
      font-weight: 700;
    }
    input {
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
    select {
      padding: 0.7rem 1rem;
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

export default PersonalInfo