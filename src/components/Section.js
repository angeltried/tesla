import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttons>
       <Fade>
       <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          { rightBtnText &&
             <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
       </Fade>
        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
 width:100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: no-repeat;
 background-image: url('/images/model-s.jpg');
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 background-image: ${props => `url("/images/${props.bgImage}")`}

`
const ItemText = styled.div`
  text-align: center;
  padding-top:15vh;
  h1{
    font-weight: 500;
    font-size: 45px;
    margin-bottom: 12px;
  }
  p{
    letter-spacing: 0.15rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  height: 40px;
  width: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 1;
  font-size: 15px;
  margin: 8px;
  cursor: pointer;

  @media (max-width: 786px) {
    width:450px;
  }
`

const RightButton = styled(LeftButton)`
background: #fff;
opacity: 0.65;
color: #000;
`

const DownArrow = styled.img`
margin-top: 20px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
cursor: pointer;
`

const Buttons = styled.div`
margin-bottom: 15px;
`