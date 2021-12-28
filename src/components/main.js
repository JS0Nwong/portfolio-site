import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import PowerButton from "./subComponents/button";
import LogoComponent from "./subComponents/logo";
import Socials from "./subComponents/socials";
import { YinYang } from "./svgs";

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
    z-index: 3;
`

const Blog = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    right: calc(1rem  + 2vw);
    text-decoration: none;
    z-index: 3;
`

const Works = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    left: calc(1rem  + 2vw);
    text-decoration: none;
    z-index: 3;
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
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv click = {click}/>
            <Container>
                <PowerButton/>
                <LogoComponent theme = {click ? 'dark' : 'light'}/>
                <Socials theme = {click ? 'dark' : 'light'}/>

                <Center click = {click}>
                    <YinYang onClick = {() => handleClick()} width = {click ? 120 : 200} height = {click ? 120 : 200} fill = 'currentColor'/>
                </Center>

                <Contact target = "_blank" to = {{pathname: 'mailto:jason.wong47@myhunter.cuny.edu'}}>
                    <h1>Say Hello!</h1>
                </Contact>

                <Blog to = "/blog">
                    <h1>Blog.</h1>
                </Blog>

                <Works to = "/works" click = {+click}>
                    <h1>Works.</h1>
                </Works>

                <BottomBar>
                    <About to = "/about" click = {+click}>
                        <h1>About.</h1>
                    </About>
                    <Skills to = "/skills">
                        <h1>Skills.</h1>
                    </Skills>
                </BottomBar>

            </Container>
        </MainContainer>
    )
}

export default Main;