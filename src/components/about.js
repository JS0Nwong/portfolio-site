import React from "react";
import { keyframes, ThemeProvider } from "styled-components";
import styled from "styled-components";
import { DarkTheme, lightTheme } from "./themes";
import { Design, Develop } from "./svgs";
import Astronaut from '../assets/Images/spaceman.png';

import LogoComponent from "./subComponents/logo";
import PowerButton from "./subComponents/button";
import Socials from "./subComponents/socials";
import Particles from "./subComponents/particles";

const Box = styled.div`
    background-color: ${props => props.theme.body};
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
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
    ${Main}:hoever &{
        &>*{
            fill: ${props => props.theme.body};
        }
    }
`
const float = keyframes`
    0%{
        transform: translateY(-10px);
    }
    50%{
        transform: translateY(15px) translateX(15px);
    }
    100%{
        transform: translateY(-10px);
    }
`

const Spaceman = styled.div`
    position: absolute;
    top: 20%;
    right: 5%;
    width: 20vw;
    animation: ${float} 3s ease-in-out infinite;

    img{
        with: 100%;
        height: auto;
    }
`

const about = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme = "light"/>
                <Socials theme = "light"/>
                <PowerButton />
                <Particles theme = "light"/>
                <Spaceman>
                    <img src = {Astronaut} alt = "spaceman" />
                </Spaceman>

                <Main>
                    I'm Jason, a rising junior passionate about web development and software engineering. I'm developing my skills through my studies at Hunter College, where I'm working towards a Bachelor of Arts in Computer Science with a minor in Media Studies. 
                    I'm always looking to expand my network, so feel free to connect with me on Github or LinkedIn!
                    <br /><br />
                    I currently have 3 years experience with HTML/CSS, JavaScript and C++ as a developer, but I would love to work with other langauges and softwares!
                    <br /><br />
                    I'm always looking for cool stuff to work on. Got a cool idea? Contact me!
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default about;