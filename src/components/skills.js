import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./themes";
import { Design, Develop } from "./svgs";
import LogoComponent from "./subComponents/logo";
import PowerButton from "./subComponents/button";
import Socials from "./subComponents/socials";
import Particles from "./subComponents/particles";

const Box = styled.div`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h2`
    display: flex;
    jsutify-content: center;
    align-items: center;
    font-size: calc(1rem + 1vw);
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6rem + 1vw);
    padding: 0.5rem 0;

    strong {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    ul, p {
        margin-left: 2rem;
    }
    ${Main}:hover &{
        &>*{
            fill: ${props => props.theme.body};
        }
    }
`

const skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                {/* <PowerButton theme = 'light'/> */}
                <LogoComponent theme = 'light'/>
                <Socials /> 
                <Particles theme ='light' />
                <Main>
                    <Title>
                        <Design width = {40} height = {40}/> Designer
                    </Title>

                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>

                    <Description>
                        <strong>I LIKE TO DESIGN</strong>
                        <ul>
                            <li>Web Design</li>
                            <li>Mobile Apps</li>
                        </ul>
                    </Description>

                    <Description>
                        <strong>TOOLS</strong>
                        <ul>
                            <li>Figma</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develop width = {40} height = {40}/> Front End Engineer
                    </Title>

                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>HTML, CSS, JavaScript, React.js, Node.js, MongoDB, C++</p>
                    </Description>
                    <Description>
                        <strong>TOOLS</strong>
                        <p>VS Code, GitHub</p>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>

    )
}

export default skills;