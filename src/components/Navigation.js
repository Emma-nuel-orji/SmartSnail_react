import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'
import { Link } from 'react-router-dom';

// import { ConnectButton } from '@rainbow-me/rainbowkit';

const Section = styled.section`
width: 100vw;
background-color: whitesmoke;
// background-color: ${props => props.theme.body};

`
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

.mobile{
  display: none;
}

@media (max-width: 64em){
  .desktop{
    display: none;
  }
  .mobile{
  display: inline-block;
}
}
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
gap: 20px;

@media (max-width: 64em) {
  /* 1024 px */
  position: fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index:50;
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
  backdrop-filter: blur(2px);

  transform: ${props => props.click ? 'translateY(0)' : `translateY(1000%)`};
  transition: all 0.3s ease;
  
  flex-direction: column;
  justify-content: center;

  touch-action: none;


}

`

const MenuItem = styled.li`
margin: 0.1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}

@media (max-width: 64em) {
  margin: 1rem 0;

  &::after{
    display: none;
  }
}
`
// mobile responsiveness
const HamburgeMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 90%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' :'translateX(-50%) rotate(0)' };

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em) {
  /* 1024 px */
  display: flex;
}

&::after, &::before{
  content: ' ';
  width: ${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
  transition: all 0.3s ease;
}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' :' rotate(0)' };
}

&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' :' rotate(0)' };
}
`





const Navigation = () => {
  // to save the wallet address
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWallectConnected();
    addWalletListener();
  });

  // function to connect wallet
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try{
        // check if metamask is installed
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch(err) {
        console.error(err.message);
      }
    } else {
      // check if metamask is not installed
      console.log("Please install Metamask")
    }
  };

// function to make the wallet displayed even when refreshed

  const getCurrentWallectConnected = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try{

        const accounts = await window.ethereum.request({ method: "eth_accounts"});
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMAsk using the Connect Button")
        }
      } catch(err) {
        console.error(err.message);
      }
    } else {
      // check if metamask is not installed
      console.log("Please install Metamask")
    }
  };

    // function to connect wallet
  const addWalletListener = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      window.ethereum.on("accountsChanged", (accounts) =>{
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      // check if metamask is not installed
      setWalletAddress("");
      console.log("Please install Metamask")
    }
  };

  const [click, setClick] = useState(false);

const scrollTo = (id) => {

  let element = document.getElementById(id);

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'

  })

  setClick(!click);
}

  return (
    <Section id='navigation'>
      <NavBar>
        <Logo />
        <HamburgeMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgeMenu>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')} >Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')} >Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')} >Team</MenuItem>
          <MenuItem > <a href="https://medium.com/@web3chinonsolutions/yes-the-nft-craze-might-be-over-but-the-technology-is-still-solid-and-very-new-9f533dbe0352?source=user_profile---------1----------------------------">Blog</a> </MenuItem>
          <MenuItem onClick={() => scrollTo('faq')} >Faq</MenuItem>
          <MenuItem>
            <div className="mobile">
   
            <Link onClick={connectWallet}>
              {walletAddress && walletAddress.length > 0 ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : <Button text="Connect Wallet"/>}

              {/* <Button text="Connect Wallet" /> */}
            </Link>
            
            </div>
          </MenuItem>
        </Menu>
        <div className="desktop">
       
       <Link onClick={connectWallet}>
        
          {walletAddress && walletAddress.length > 0 ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : <Button text="Connect Wallet"/>}
      
       </Link>
        
   

         
        </div>
        
      </NavBar>
    </Section>
  )
}

export default Navigation
