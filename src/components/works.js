import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./themes";
import {motion} from 'framer-motion'
import Particles from "./subComponents/particles";

import PowerButton from "./subComponents/button";
import LogoComponent from "./subComponents/logo";
import Socials from "./subComponents/socials";

import {Work} from "../data/WorkData";
import Project from "./subComponents/project";

const Box = styled.div`
    height: 200vh;
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.body};
`

const Main = styled(motion.ul)`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;

    color: ${props => props.theme.text};
`

const container = {

}

const Works = () => {

    const ref = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`;
        }

        window.addEventListener("scroll", rotate);

        return () => window.removeEventListener("scroll", rotate);
    
    }, [])

    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme = "light"/>
                <Socials theme = "light"/>
                <Particles theme ='light' />
                {/* <PowerButton /> */}

                <Main ref = {ref}>
                    {Work.map(work => <Project key = {work.id} data = {work} />)}
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default Works;