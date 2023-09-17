import React, {useState} from 'react'
import styled from 'styled-components'



import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 48em){
    height: 15rem;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em){
    img{
        width: 10rem;
        height: auto;
    }
  }
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index:10;
width: 50%;
// text-transform: capitalize;

text-shadow: 1px 1px 2px ${props => props.theme.text};

@media (max-width: 64em){
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
    width: 40%;
  }

@media (max-width: 48em){
    font-size: ${props => props.theme.fontlg};
    padding: 2rem 0;
    width: 90%;
  }
  
`






const Banner = () => {
  const [email, setEmail] = useState(' ');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail(' ');
  };

  return (
    <Section>
        <ImgContainer>
           <img src={img1} alt="The weirdos" />
           <img src={img2} alt="The weirdos" />
           <img src={img3} alt="The weirdos" />
           <img src={img4} alt="The weirdos" />
           <img src={img5} alt="The weirdos" />
           <img src={img2} alt="The weirdos" />

        </ImgContainer>
        <Title>
        <div>

      <h4>Subscribe to our Newsletter</h4>
      <br />
  
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
      </Title>
       
        
    </Section>
  )
}

export default Banner