import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { dark } from '../../styles/Themes'
import { Link } from 'react-router-dom'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em){
  width: 85%;
}


@media (max-width: 74em){
  width: 100%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}

@media (max-width: 40em){

  &>*:last-child{
    width: 90%;
  }
}
`

const Box = styled.div`
width: 80%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 50vh;
}
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 100%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};
}
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 100%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
}
`

const SubTextLight = styled.h1`
font-size: ${props => props.theme.fontmd};
color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 100%;
margin: 1rem auto;
font-weight:400;

@media (max-width: 74em){
  width: 100%;
  // text-align: center;
  font-size: ${props => props.theme.fontsm};
}

@media (max-width: 40em){
  font-size: ${props => props.theme.fontsm};
  // text-align: center;
  width: 100%;
}

@media (max-width: 30em){
  font-size: ${props => props.theme.fontsx};
  // text-align: center;
  width: 100%;
  
}
`

const ButtonContainer = styled.div`
width: 100%;
margin: 1rem auto;
display: flex;
align-self: flex-start;



@media (max-width: 74em){
  width: 100%;

  button{
    margin: 0 auto;
  }
}

`



const About = () => {
  return (
    <Section id='about'>
      <Container>
        <Box> <Carousel /></Box>
      <Box>
        <Title>
        SmartSnail NFT is the token for Web3Chinonsolutions ecosystem.
        </Title>
        <SubText>
        Web3Chinonsolutions is an ecosystem that aims to integrate web3 solutions with real life use case and the Metaverse within the following niches:

        </SubText>
        <SubTextLight>
          <Link to="https://smartsnailnft.onrender.com/#entertainment">
        ✅ <i style={{color: 'Violet', textDecoration: 'underline' }}>Entertainment</i> ( we are building Metaverse cinema where movies and music would be watched in the metaverses in a watch to earn mechanism.) ..... <br/>
          </Link> <br />
        <Link to="https://smartsnailnft.onrender.com/#fitnes">
        ✅ <i style={{color: 'Violet', textDecoration: 'underline' }}>Fitness </i>  and wellness (our NFTs would serve as tickets to gym facilities and Metaverse AR fitness experiences which works with move to earn mechanism) ..... <br/>
        </Link> <br />
        <Link to="https://smartsnailnft.onrender.com/#tour">
        ✅ <i style={{color: 'Violet', textDecoration: 'underline' }}>Leisure </i>  (we launched a tour group where our NFTs serve as ticket to travel the world, with SmartSnail NFT you get access to travel and tour cool destinations all over the world.) .....<br/>
        </Link> <br />
        <Link to="https://smartsnailnft.onrender.com/#hospitality">
        ✅ <i style={{ color: 'Violet', textDecoration: 'underline' }}>Hospitality </i>  (our NFTs would be used to pay for shortlet apartments) .....
        </Link>
        

        </SubTextLight>
        <ButtonContainer>
         
            <ThemeProvider theme={dark}>
          <Link to="https://discord.gg/hbkPNd4g">
            <Button text="JOIN OUR DISCORD" link="https://discord.gg/hbkPNd4g" />
          </Link>
          
        </ThemeProvider>

        <ThemeProvider theme={dark}>
          <Link to="https://smartsnailnft.onrender.com/">
            <Button text="How It Works" link="https://smartsnailnft.onrender.com/" />
          </Link>
          
        </ThemeProvider>
         
        
        </ButtonContainer>

       
      </Box>
      </Container>
      
    </Section>
  )
}

export default About