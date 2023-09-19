import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';
import { Link } from 'react-router-dom';


const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
  text-transform: uppercase;
  font-family:'Akaya Telivigala', cursive;
}
.text-1{
  color: blue;
}
.text-2{
  color: orange;
}
.text-3{
  color: red;
}
.text-4{
  color: purple;
}

@media (max-width: 70em){
  font-size: ${(props) => props.theme.fontxl};
  align-self: center;
  text-align: center;
}

@media (max-width: 48em){
  align-self: center;
  text-align: center;
}

@media (max-width: 40em){
  width: 90%;
}
`
const SubTitle = styled.h1`
font-size: ${(props) => props.theme.fontxl};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.text}, 0.6)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
// padding-top:15px;

@media (max-width: 70em){
  font-size: ${(props) => props.theme.fontmd};
  align-self: center;
  text-align: center;
}

@media (max-width: 48em){
  align-self: center;
  text-align: center;
}


`
const Text = styled.p`
// font-size: ${(props) => props.theme.fontlg}
// text-transform: capitalize;
// color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
// font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 78em){
  align-self: center;
  justify-alignment: center;
  // text-align: center;
}
`
const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 78em){
  align-self: center;
  text-align: center;
  padding-bottom: 20px;

  button{
    margin: 0 auto;
  }
}
`
const TypeWriterText = () => {
  return (
  <>
    <Title>
        Welcome to smart snail NFT
        <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFT Token For Metaverse.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">NFT Token For Leisure.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">NFT Token For Fitness.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-4">NFT Token For Wellness.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-1">NFT Token For Entertainment.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">NFT Token For Recreation.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">NFT Token For Travel.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-4">Slow progress is fast.</span>')
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
  
/>
    </Title>
    <SubTitle>Snail Story.</SubTitle>
    <Text>Once upon a time, in a land far, far away, there lived a group of snails who where known for their exceptional intelligence and resourcefulness. These snails were called the   "Smart Snails," and they were highly prized by collectors all over the world. There were five species of Smart Snails, each with its own unique abilities and characteristics. The   first species was the Speedy Snail, which was renowned for its lightning-fast movement. The second species was the Stealth Snail, which was able to blend into its surroundings and   sneak past its predators......
    </Text>
    <ButtonContainer>
      <Link to="http://bit.ly/3JUNAFz">
        <Button text="Read More"   />
      </Link>
    
    </ButtonContainer>
    </>
  )
}

export default TypeWriterText