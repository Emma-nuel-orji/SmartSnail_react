import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/blogs/blog.webp';
import img8 from '../../assets/blogs/another-header.png';
import img9 from '../../assets/blogs/gym.webp';


const Section = styled.section`
min-height: 30vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;


@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontxl};
}
`

const  Container = styled.div`
width: 75%;
margin: 2rem auto;
border-bottom: 1px solid ${(props) => props.theme.text};

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
  width: 80%;
}

@media (max-width: 48em){
  width: 90%;
  justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
  width: 70vw;
}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`
const Position = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;


display: flex;
align-items: center;
justify-content: center;
// text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ", position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const ReadMore = () => {
  return (
    <Section id='ReadMore'>
     
      <Title>blogs</Title>
      <Container>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <MemberComponent img={img7}  position=" NFT Technology still solid " />
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/nfts-not-furry-turtles-86f01921a52e?source=user_profile---------2----------------------------">
        <MemberComponent img={img8}  position="NFTs, not furry turtles!" />
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/are-you-tired-of-the-same-old-boring-gym-membership-fees-1b26532cbb7d">
        <MemberComponent img={img9}  position="Gym membership with NFT" />
        </Link>
        
      </Container>
    </Section>
  )
}


export default ReadMore