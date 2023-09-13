import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'


const Section = styled.section`
min-height: 120vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: uppercase;
color: ${(props) => props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width: fit-content;

@media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
}

@media (max-width: 64em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{
      margin-top: 0;
    }
  }
}
`
const Box = styled.div`
width: 45%;

@media (max-width: 64em){
  width: 90%;
  align-self: center;
}

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger)
useLayoutEffect(() => {

  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: 'bottom top',
    pin:true,
    pinSpacing:false,
    scrub:true,
  })
  return () => {
    ScrollTrigger.killAll();
  };
}, [])

  return (
    <Section ref={ref} id='faq'>
      <Title>Faq</Title>
      <Container>
        <Box>
          <Accordion title="* How valuable can Smart Snail NFT get?">
                If we’ve done a good job in communicating Smart Snail NFT, then by now you should understand we are only interested in playing longterm games. We are not interested in selling you jpegs and leaving you to your fate but in giving these NFTs real life values. We are not interested in selling out immediately, but in organic community growth which will attract like minds that way we ensure long term sustainability of this project. There are many factors that will make Smart Snail very valuable, 
                First, it provides access to multiple services and benefits, including gym memberships, rent payment, and tourism experiences, depending on the staking duration......
          </Accordion>
          <Accordion title="* Where would the funds used to pay gyms, tour experiences property rents, hotel bills or content providers come from?">
                We would have reserve funds from where we can service our platform.
                For most part of it the SS1 DApp is self-sufficient in the sense that ticket fees paid in crypto are splitted with some percentages going to the platform while the rest goes to the reserve fund. Then for the access grant by staking NFT, the staking rewards will be sent to the reserve funds. 

                The funds for paying gym, rent, and hotels would come from the staked Smart Snail SS2 NFTs. Users would stake their NFTs for a specific duration, and in return, they would receive staking rewards in the form of cryptocurrency. These rewards would be used to pay for gym memberships, rent, or hotel stays, depending on the duration of the staking period chosen by the user......
          </Accordion>
          <Accordion title="* How do we plan getting film makers, creators, gym, property owners, tour guides and hoteliers onboard especially in countries without our presence?">
                To onboard gym, property owners, and hoteliers our first approach is targeted advertisement, we would use a program where we source for individuals who are enthusiast or       involved in the relevant fields who we call Reps or Ambassadors. Provide the ambassadors with information about the Smart Snail NFT and the DApp, benefits, and .......
          </Accordion>
          
        </Box>
        <Box>
          <Accordion title="* What are our charity plans?">
                In line with our core values which centres around wellness and personal growth, 10% of sales from SS1 and 10% of sales from SS2 will go to charity. We would be focusing on giving tech education and rehabilitating some selected street kids in Nigeria so they can grow up to become healthy and successful individuals in the society. 

                Thank you for joining us on this journey, your contribution and advice matters. Come say hi to us on our telegram or on Twitter
          </Accordion>
        <Accordion title="* How do we plan to address potential challenges such as cryptocurrency price volatility and  concerns of staking rewards not being enough to cover the service fees like rent, gym membership, hotel bill or tour fees etc">
              By implementing strategies such as setting a floor on staking rewards can help ensure that stakers receive a minimum level of rewards, even if market conditions are unfavorable. Establishing a reserve fund can also help mitigate risks by providing a cushion of funds to cover unexpected expenses or losses. We would regularly monitor and adjust the program: It's important to regularly monitor the costs and benefits of the program, and make adjustments as needed to ensure that it remains financially sustainable over the long term.
          </Accordion>
        
         
          
        </Box>
      </Container>
    </Section>
  )
}

export default Faq