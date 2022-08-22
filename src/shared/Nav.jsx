import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {NavLink , useNavigate , useParams } from 'react-router-dom'

function Nav() {
  return (
    <Main>
      <div className="heading">
        <p>Complete your Purchase</p>
      </div>
      <Shared>
     
        <NavLink
          to='/personal-info'
          
        >
          <p>Personal Info</p>
        </NavLink>

        <NavLink
          to='/billing-info'
          
        >
          <p>Billing Info</p>
        </NavLink>

        <NavLink
          to='/confirm-payment'
          
        >
          <p>Confirm Payment</p>
        </NavLink>
      </Shared>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  width: 40vw;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
  @media screen and (max-width: 890px) {
    width: 70vw;
  }
  .heading {
    p {
      color: #4e598c;
      font-weight: 700;
      font-size: 30px;
      line-height: 50px;
      @media screen and (max-width: 600px) {
        font-size: 25px;
        width: max-content;
      }
    }
  }
`
const Shared = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 0.6rem;
  a {
    text-decoration: none;
    color: #bdbdbd;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    cursor: pointer;
  }
  a.active {
    color: #f2994a;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 10px;
      background-color: #f2994a;
      bottom: -1rem;
      right: 0.6rem;
      border-radius: 10px;
    }
    @media screen and (max-width: 600px) {
      font-size: 15px;
      width: max-content;
    }
  }
 
`

export default Nav