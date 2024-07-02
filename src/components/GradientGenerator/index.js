import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  MainHeading,
  DirectionText,
  DirectionBtnContainer,
  ChooseColors,
  ColorsContainer,
  FirstColorContainer,
  FirstColor,
  FirstColorInput,
  SecondColorContainer,
  SecondColor,
  SecondColorInput,
  ButtonContainer,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    bgColor1: '#8ae323',
    bgColor2: '#014f7b',
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
    activeDirectionBtn: gradientDirectionsList[0].directionId,
    directionBtn: 'top',
    btnClicked: false,
  }

  onSelectFirstColor = event => {
    this.setState({bgColor1: event.target.value})
  }

  onSelectSecondColor = event => {
    this.setState({bgColor2: event.target.value})
  }

  onClickDirection = id => {
    switch (id) {
      case 'TOP':
        return this.setState({
          activeDirectionBtn: id,
        })
      case 'BOTTOM':
        return this.setState({
          activeDirectionBtn: id,
        })
      case 'LEFT':
        return this.setState({
          activeDirectionBtn: id,
        })
      case 'RIGHT':
        return this.setState({
          activeDirectionBtn: id,
        })
      default:
        return null
    }
  }

  onClickGenerate = () => {
    const {activeDirectionBtn} = this.state

    switch (activeDirectionBtn) {
      case 'TOP':
        return this.setState(prevState => ({
          activeColor1: prevState.bgColor1,
          activeColor2: prevState.bgColor2,
          directionBtn: 'top',
        }))

      case 'BOTTOM':
        return this.setState(prevState => ({
          activeColor1: prevState.bgColor1,
          activeColor2: prevState.bgColor2,
          directionBtn: 'bottom',
        }))

      case 'LEFT':
        return this.setState(prevState => ({
          activeColor1: prevState.bgColor1,
          activeColor2: prevState.bgColor2,
          directionBtn: 'left',
        }))

      case 'RIGHT':
        return this.setState(prevState => ({
          activeColor1: prevState.bgColor1,
          activeColor2: prevState.bgColor2,
          directionBtn: 'right',
        }))

      default:
        return null
    }
  }

  render() {
    const {
      activeColor1,
      activeColor2,
      activeDirectionBtn,
      directionBtn,
      btnClicked,
      bgColor1,
      bgColor2,
    } = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        firstColor={activeColor1}
        secondColor={activeColor2}
        direction={directionBtn}
        btnClicked={btnClicked}
        prevColor1={bgColor1}
        prevColor2={bgColor2}
      >
        <MainHeading> Generate a CSS Color Gradient </MainHeading>
        <DirectionText> Choose Direction </DirectionText>
        <DirectionBtnContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              data={each}
              onClickDirection={this.onClickDirection}
              activeBtn={activeDirectionBtn === each.directionId}
            />
          ))}
        </DirectionBtnContainer>

        <ChooseColors> Pick the Colors </ChooseColors>
        <ColorsContainer>
          <FirstColorContainer>
            <FirstColor> {bgColor1} </FirstColor>
            <FirstColorInput
              type="color"
              onChange={this.onSelectFirstColor}
              value={bgColor1}
            />
          </FirstColorContainer>

          <SecondColorContainer>
            <SecondColor> {bgColor2} </SecondColor>
            <SecondColorInput
              type="color"
              onChange={this.onSelectSecondColor}
              value={bgColor2}
            />
          </SecondColorContainer>
        </ColorsContainer>

        <ButtonContainer>
          <GenerateBtn type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateBtn>
        </ButtonContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
