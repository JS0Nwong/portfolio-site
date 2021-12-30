import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { DarkTheme, lightTheme } from "./themes";
import {motion} from 'framer-motion'

import PowerButton from "./subComponents/button";
import LogoComponent from "./subComponents/logo";
import Socials from "./subComponents/socials";

import {Work} from "../data/WorkData";
import Project from "./subComponents/project";

const Box = styled.li`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.body};
`

const Main = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.text};
`

const works = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme = "light"/>
                <Socials theme = "light"/>
                <PowerButton />

                <Main>
                    {Work.map(work => <Project key = {work.id} data = {work} />)}
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default works;