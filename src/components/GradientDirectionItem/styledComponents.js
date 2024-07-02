// Style your elements here

import styled from 'styled-components'

export const EachDirectionBtn = styled.li`
  display: flex;
  justify-content: center;
  list-style-items: none;
`

export const DirectionBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  width: 100px;
  outline: none;
  border: none;
  background-color: ${props => (props.isActive ? '#ffffff' : '')};
  opacity: ${props => (props.isActive ? '1' : '0.5')};
  cursor: pointer;

  @media (max-width: 767px) {
    width: 68px;
  }
`
