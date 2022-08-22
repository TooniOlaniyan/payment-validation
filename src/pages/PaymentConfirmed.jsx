import React from 'react';
import {Link} from "react-router-dom"
import styled from 'styled-components'
import greentick from '../asset/jpg/tick.png'

const PaymentConfirmed = () => {
    return (
        <Section>
            <Container>
                <div className = 'tick'>
                    <img src={greentick} alt='green-tick'/>
                </div>
                <div className='completed'>
                    <h1>Payment Completed</h1>
                    <p>Please check your email concerning the details of this transaction</p>
                    <div>
                        <Link to="/">Return Home</Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

const Section = styled.section `
   width: 100%;
   min-height: 100vh; 
   display: flex;
   justify-content: center;
   align-items: center;
`

const Container = styled.div`
  height: 480px;
  width: 801px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  padding: 100px;
  .tick {
    margin: 0 auto;
    padding: 25px 20px;
    height: 84px;
    width: 84px;
    border-radius: 50%;
    box-shadow: 0px 6px 10px rgba(33, 30, 67, 0.08);
  }
  .completed {
    h1 {
      font-size: 40px;
      color: #4e598c;
      margin-bottom: 32px;
    }
    p {
      font-size: 20px;
      color: #4f4f4f;
      margin-bottom: 32px;
    }
    div {
      a {
        font-size: 20px;
       color:#f2994a;
      }
    }
  }
`;



export default PaymentConfirmed;