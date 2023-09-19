import styled, { keyframes } from 'styled-components'
import React, {useRef} from 'react'
import { Link } from 'react-router-dom';

import img1 from '../../assets/Nfts/96.png';
import img2 from '../../assets/Nfts/99.png';
import img3 from '../../assets/Nfts/93.jpeg';
import img4 from '../../assets/Nfts/67.jpeg';
import img5 from '../../assets/Nfts/68.jpeg';
import img6 from '../../assets/Nfts/69.jpeg';
import img7 from '../../assets/Nfts/92.png';
import img8 from '../../assets/Nfts/71.jpeg';
import img9 from '../../assets/Nfts/72.jpeg';
import img10 from '../../assets/Nfts/73.jpeg';
import img11 from '../../assets/Nfts/74.jpeg';
import img12 from '../../assets/Nfts/90 (1).jpeg';
import img13 from '../../assets/Nfts/76.jpeg';
import img14 from '../../assets/Nfts/77.jpeg';
import img15 from '../../assets/Nfts/97.png';
import img16 from '../../assets/Nfts/79.jpeg';
import img17 from '../../assets/Nfts/80.jpeg';
import img18 from '../../assets/Nfts/81.jpeg';
import img19 from '../../assets/Nfts/88.jpeg';
import img20 from '../../assets/Nfts/84.jpeg';


import ETH from '../../assets/icons8-ethereum-48.png';
import SOLANA from '../../assets/solana.svg';
import POLY from '../../assets/polygon.svg';
const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 39s;
  }
}
&>*:last-child{
  animation-duration: 15s;

  @media (max-width: 35em){
    animation-duration: 30s;
  }
}
`
const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%) }
`

const Row = styled.div`
// background-color: lightblue;
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
border-top-right-radius: 5px;
border-top-left-radius: 5px;
// background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
}

@media (max-width: 30em){
  width: 10rem;
}

img{
  width: 100%;
  height: auto;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
`
const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
  
}

h6{
  font-size: ${props => props.theme.fontsm};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};
    font-weight:200;
  }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running'
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused'
}

  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
    <img src={img} alt="The weirdos" />
    <Details>
      <div>
        <span>SmartSnail</span> <br />
        <h6>{number}</h6>
      </div>
      
      <div>
        <span>Price</span>
        <Price>
          <img src={ETH} alt="ETH" />
          <img src={SOLANA} alt="SOLANA" />
          <img src={POLY} alt="POLY" />
          {/* <h1>{Number(price).toFixed(1)}</h1> */}
        </Price>
        
      </div>
    </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)
  return (
    <Section id='showcase'>
      <Row direction="none" ref={Row1Ref}>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img1} number={'Coming Soon'}   passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img2} number={'Coming Soon'}   passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img3} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img4} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img5} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img6} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img7} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img8} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img9} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
        <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img10} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
        </Link>
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img11} number={'Coming Soon'} price={1.5}  passRef = {Row2Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img12} number={'Coming Soon'} price={1.5}  passRef = {Row2Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img13} number={'Coming Soon'} price={1.5}  passRef = {Row2Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img14} number={'Coming Soon'} price={1.5} passRef = {Row2Ref} />
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img15} number={'Coming Soon'} price={1.5}  passRef = {Row2Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
        <NftItem img={img16} number={'Coming Soon'} price={1.5}  passRef = {Row2Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
      <NftItem img={img17} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
      <NftItem img={img18} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
      <NftItem img={img19} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
      </Link>
      <Link to="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352">
      <NftItem img={img20} number={'Coming Soon'} price={1.5}  passRef = {Row1Ref}/>
      </Link>
      </Row>
    </Section>
  )
}

export default Showcase