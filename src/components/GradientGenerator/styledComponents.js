// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.firstColor}, ${props.secondColor})`};
  height: 100vh;
  background-size: cover;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`

export const DirectionText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

export const DirectionBtnContainer = styled.ul`
  display: flex;

  @media (max-width: 767px) {
    padding-left: 7px;
  }
`

export const ChooseColors = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`

export const ColorsContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const FirstColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`

export const FirstColor = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const FirstColorInput = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 80px;
  height: 40px;
`

export const SecondColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SecondColor = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const SecondColorInput = styled.input`
  outline: none;
  border: none;
  background: none;
  width: 80px;
  height: 40px;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const GenerateBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`
