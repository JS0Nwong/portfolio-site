import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import PowerButton from "./subComponents/button";
import LogoComponent from "./subComponents/logo";
import Socials from "./subComponents/socials";
import { YinYang } from "./svgs";
import Intro from './intro';

import {motion} from 'framer-motion';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }
`
const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem  + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    right: calc(1rem  + 2vw);
    text-decoration: none;
    z-index: 1;
`

const Works = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    left: calc(1rem  + 2vw);
    text-decoration: none;
    z-index: 1;
`
const BottomBar = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const About = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index: 1;
`
const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 3;
`

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    
    &>:first-child {
        animation: ${rotate} 2s linear infinite;
    }
    &>:last-child {
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding: 0.8rem;
        font-size: 2rem;
        font-weight: 800;
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    // useEffect(() => {

    //         let links = document.querySelectorAll('a');
    //         // if(links.hasChildNodes())
    //         // {
    //              const animate = function(e) {
    //                 const header = this.querySelector('h1');
    //                 const { offsetX: x , offsetY: y } = e,
    //                 { offsetWidth: width, offsetHeight: height } = this,

    //                 move = 15,
    //                 xMove = x / width * (move * 2 ) - move,
    //                 yMove = y / height * (move * 2 ) - move;

    //                 header.style.transform = `translate(${xMove}px, ${yMove}px)`;

    //                 if(e.type === 'mouseleave') {
    //                     header.style.transform = '';
    //                 }
    //             }
    //             links.forEach(link => link.addEventListener('mousemove', animate));
    //             links.forEach(link => link.addEventListener('mouseleave', animate));
    //         //}
    // })

    return (
        <MainContainer>
            <DarkDiv click = {click}/>
            <Container>
                <PowerButton/>
                <LogoComponent theme = {click ? 'dark' : 'light'}/>
                <Socials theme = {click ? 'dark' : 'light'}/>

                <Center click = {click}>
                    <YinYang onClick = {() => handleClick()} width = {click ? 120 : 200} height = {click ? 120 : 200} fill = 'currentColor'/>
                    <span>Enter</span>
                </Center>

                <Contact target = "_blank" to = {{pathname: 'mailto:jason.wong47@myhunter.cuny.edu'}}>
                    <motion.h1
                        initial = {{y: -200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        whileHover={{scale: 1.1,}}
                        whileTap={{scale: 0.9}}
                    >Say Hello!</motion.h1>
                </Contact>

                <Blog to = "/blog">
                    <motion.h1
                        initial = {{y: -200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        whileHover={{scale: 1.1,}}
                        whileTap={{scale: 0.9}}
                    >Blog.</motion.h1>
                </Blog>

                <Works to = "/works" click = {+click}>
                    <motion.h1
                        initial = {{y: -200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                        whileHover={{scale: 1.1,}}
                        whileTap={{scale: 0.9}}                        
                    >Works.</motion.h1>
                </Works>

                <BottomBar>
                    <About to = "/about" click = {+click}>
                        <motion.h1
                            initial = {{y: 200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                            animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                            whileHover={{scale: 1.1,}}
                            whileTap={{scale: 0.9}}
                        >About.</motion.h1>
                    </About>
                    <Skills to = "/skills">
                        <motion.h1
                            initial = {{y: 200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                            animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                            whileHover={{scale: 1.1,}}
                            whileTap={{scale: 0.9}}                        
                        >Skills.</motion.h1>
                    </Skills>
                </BottomBar>

            </Container>

            {click ? <Intro click = {click}/> : null} 

        </MainContainer>
    )
}

export default Main;