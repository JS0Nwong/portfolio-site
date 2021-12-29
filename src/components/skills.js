import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./themes";
import { Design, Develop } from "./svgs";

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

const Title = styled.h1`
    display: flex;
    jsutify-content: center;
    align-items: center;
    font-size: calc(1rem + 1.5vw);
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6rem + 1vw);
    padding: 0.5rem 0;
`

const skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>   
                <Main>
                    <Title>
                        <Design width = {40} height = {40}/>
                    </Title>

                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develop width = {40} height = {40}/>
                    </Title>

                    <Description>
                        I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>

    )
}

export default skills;