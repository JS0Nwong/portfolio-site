import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
    color: ${props => props.theme.text};
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
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`
const Skills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index: 1;
`

const Center = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
    cursor: pointer;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton/>
                <LogoComponent />
                <Socials/>

                <Center>
                    <YinYang width = {150} height = {150} fill = 'currentColor'/>
                </Center>

                <Contact target = "_blank" to = {{pathname: 'mailto:jason.wong47@myhunter.cuny.edu'}}>
                    <h1>Say Hello!</h1>
                </Contact>

                <Blog to = "/blog">
                    <h1>Blog.</h1>
                </Blog>

                <Works to = "/works">
                    <h1>Works.</h1>
                </Works>

                <BottomBar>
                    <About to = "/about">
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