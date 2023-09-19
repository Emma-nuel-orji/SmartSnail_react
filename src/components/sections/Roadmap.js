import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect , useRef} from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg';

const Section = styled.section`
min-height: 150vh;
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

@media (max-width: 78em){
  font-size: ${(props) => props.theme.fontxl};
}
`
const Container = styled.div`
width: 70%;
height: 375vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 80em){
  
  width: 80%;
  padding-top: 50px;
}

@media (max-width: 78em){
  width: 90%;
  // padding-top: 400px;
  height: 500vh;
  Container{
    
    padding-top: 500px;
    border: 2px solid red;
  }
}


`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Items = styled.ul`
list-style:none;
width: 100%;
height: 100%;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
// background-color: lightblue;
padding-top: 50px;

@media (max-width: 70em){
  width: 100%;
  padding-top: 0;


}

&>*:nth-of-type(2n +1){
  justify-content: start;

  @media (max-width: 70em){
    justify-content: center;
  }

  div{
    border-radius: 50px 0 50px 0;
    // text-align: right;

    @media (max-width: 70em){
      border-radius: 0 50px 0 50px;
      text-align: left;

      p{
        border-radius: 0 40px 0 40px;
      }
    }
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content: end;

  @media (max-width: 70em){
    justify-content: center;
  }

  div{
    border-radius:0 50px 0 50px ;
    text-align: left;

    
  }
  p{
    border-radius:0 40px 0 40px ;
  }
}
`
const Item = styled.li`
width: 100%;
height: 100%;
display:flex;

@media (max-width: 70em){
  justify-content: flex-end !important;

}
`
const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid ${props => props.theme.text};

@media (max-width: 78em){
  width: 66%;
}

`
const Box = styled.p`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border 1px solid ${props => props.theme.text};
`
const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 70em){
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 600;
}
`;

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight:400;
margin: 0.5rem 0;
top: 0;
@media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxs};
  
}
`;


const RoadMapItem = ({title, subtext, addToRef}) => {

  const subtextArray = subtext.split('. ');

  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          {subtextArray.map((part, index) => (
            <Text key={index}>{part}.</Text>
          ))}
          
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];

gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
  if(el && !revealRefs.current.includes(el)) {
    revealRefs.current.push(el);
  }
}

useLayoutEffect(() => {
  let t1 = gsap.timeline();
revealRefs.current.forEach( (el, index) => {

  t1.fromTo(
    el.childNodes[0],
    {
      y: '0'
    },{
      y: '-30',

      scrollTrigger:{
        id: `section-${index + 1}`,
        trigger: el,
        start: 'top center+=200px',
        end: 'bottom center',
        scrub:true,
        // markers: true,
      }
    }
  )
} )

  return () => {
    
  };
}, [])

  return (
    <Section id='roadmap'>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          {/* <Item>&nbsp;</Item> */}
          <RoadMapItem addToRef={addToRefs} title="Phase 1 " subtext="☑ Research and develop the concept for Smart Snail SS1 NFT. ☑ Assemble a development team with expertise in blockchain, smart contracts, and web development. ☑ Start developing the website for smart snail NFT. ☑ Start 3D design of the building where our DApp will be hosted on the TCG metaverse Conduct internal testing and debugging Create social media pages" />
          <RoadMapItem addToRef={addToRefs} title="Phase 2" subtext="☑ Start social media campaign to attract filmmakers, musicians and content creators. ☑ Launch the Smart Snail NFT website publicly. ☑ Conduct a marketing campaign to attract NFT buyers, stakers and partnership. 
              ☑ Develop partnerships with other blockchain platforms and NFT marketplaces to expand reach and visibility. 
              ☑ Monitor and optimize website performance and user experience based on feedback and usage data. 
              ☑ Commence presale. 
              * Full launch of SS1 NFT. 
              * Purchase more TCG world farms and plot for metaverse gym. 
              * Commence comic creation of smart snail which will be sold as NFT. 
              * Commence the development of SS2" />
          <RoadMapItem addToRef={addToRefs} title="Phase 3" subtext="* Develop the MVP version of the SS1 Dapp with basic features for content providers and consumers. * Implement the Smart Snail NFT ticketing system and rewards program. * Implement the in-built wallet system for both content providers and consumers. * Develop the moderation tools for the admin dashboard. * Perform testing and debugging to ensure the platform functions as expected. * Launch the MVP version of the platform. *Onboard film makers, creators and musicians" />
          <RoadMapItem addToRef={addToRefs} title="Phase 4" subtext="* Gather feedback from early adopters and use it to improve the platform's functionality. * Expand the platform's features to allow for more content categories and additional content types. * Scale the platform to accommodate a larger user base. Implement additional revenue streams, such as paid advertisements and sponsored content. * Develop partnerships and collaborations with relevant industry players to expand the platform's reach and visibility" />
          <RoadMapItem addToRef={addToRefs} title="Phase 5" subtext="* Dapp development for SS2 MVP version. * Launch the MVP version of the platform. * Onboard fitness enthusiast, gym owners, tour guides, property owners and ambassadors. * Gather feedback from early adopters and use it to improve the platform's functionality. * Expand the platform's features to allow for more. * Explore additional features to add to the platform such as live streaming and virtual events. * Explore additional revenue streams such as transaction fees and listing fees. * Investigate scaling solutions such as layer 2 solutions or sidechains to handle increased traffic and activity on the platform. * Continue to monitor and optimize platform performance and user experience based on feedback and usage data" />
          <RoadMapItem addToRef={addToRefs} title="Phase 6" subtext="* Continue to gather feedback and implement improvements to the platform. * Focus on community building and engagement to create a strong user base. * Implement a sustainable business model to ensure the long-term success of the platform. * Continue to develop and launch new features and functionalities based on user feedback and market trends. * Expand the use of Smart Snail NFTs beyond the platform to create additional value for holders" />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap