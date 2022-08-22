import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <Main>
      <div className="heading">
        <p>Complete your Purchase</p>
      </div>
      {/* <Shared>
        <Link to="/personal-info">
          <p className="focused">Personal Info</p>
        </Link>
        <Link to="/billing-info">
          <p className="notFocused">Billing Info</p>
        </Link>
        <Link to="/confirm-payment">
          <p className="notFocused">Confirm Payment</p>
        </Link>
      </Shared> */}

      <Shared>
        <p>
          <NavLink to="/personal-info" activeClassName="active">
            Personal Info
          </NavLink>
        </p>
        <p>
          <NavLink to="/billing-info" activeClassName="active">
            Billing-info
          </NavLink>
        </p>
        <p>
          <NavLink to="/confirm-payment" activeClassName="active">
            confirm Payment
          </NavLink>
        </p>
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
 
  .heading {
    p {
      color: #4e598c;
      font-weight: 700;
      font-size: 30px;
      line-height: 50px;
    }
  }
`
// const Shared = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   border-bottom: 1px solid black;
//   padding: 0.6rem;
//   a{
//     text-decoration: none;
//   }
//   .focused {
//     color: #f2994a;
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 34px;
//     position: relative;
//     cursor: pointer;
//     &:before {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 13px;
//       background-color: #f2994a;
//       bottom: -1rem;
//       right: 0.6rem;
//       border-radius: 10px;
//     }
//   }
//   .notFocused {
//     color: #bdbdbd;
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 34px;
//     cursor: pointer;
//   }
// `


const Shared = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 0.6rem;
  p {
    a {
      text-decoration: none;
      color: #bdbdbd;
      font-weight: 700;
      font-size: 20px;
      line-height: 34px;
      &.active {
        color: #f2994a;
        font-weight: 700;
        font-size: 20px;
        line-height: 34px;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 13px;
          background-color: #f2994a;
          bottom: -1.3rem;
          right: 0.6rem;
          border-radius: 10px;
        }
      }
    }
  }
`;
export default Nav