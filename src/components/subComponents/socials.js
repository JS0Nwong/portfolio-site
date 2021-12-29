import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../svgs";
import {DarkTheme} from '../themes'
import { motion } from "framer-motion";

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.click ? props.theme.body : props.theme.text};

    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 1;

    font-size: 2.5rem;

    &>*::not(:last-child) {
        margin: 1.5rem 0;
    }

`

const Line = styled(motion.span)`
    width: 2px;
    height: 11rem;

    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const Socials = (props) => {
    return (
        <Icons>
            <motion.div
                initial = {{transform: "scale(0)"}}
                animate = {{scale: [0, 1, 1.1, 1]}}
                transition = {{type: 'spring', duration: 1, delay: 1}}
            >
                <NavLink style = {{color: 'inherit'}} target = '_blank' to = {{pathname: 'https://github.com/JS0Nwong'}}>
                    <Github width = {25} height = {25} fill = {props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}></Github>
                </NavLink>
            </motion.div>

            <motion.div
                initial = {{transform: "scale(0)"}}
                animate = {{scale: [0, 1, 1.1, 1]}}
                transition = {{type: 'spring', duration: 1, delay: 1.1}}
            >
                <NavLink style = {{color: 'inherit'}} target = '_blank' to = {{pathname: 'https://github.com/JS0Nwong'}}>
                    <Twitter width = {25} height = {25} fill = {props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}></Twitter>
                </NavLink>
            </motion.div>

            <motion.div
                initial = {{transform: "scale(0)"}}
                animate = {{scale: [0, 1, 1.1, 1]}}
                transition = {{type: 'spring', duration: 1, delay: 1.2}}
            >
                <NavLink style = {{color: 'inherit'}} target = '_blank' to = {{pathname: 'https://github.com/JS0Nwong'}}>
                    <Facebook width = {25} height = {25} fill = {props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}></Facebook>
                </NavLink>
            </motion.div>

            <motion.div
                initial = {{transform: "scale(0)"}}
                animate = {{scale: [0, 1, 1.1, 1]}}
                transition = {{type: 'spring', duration: 1, delay: 1.3}}
            >
                <NavLink style = {{color: 'inherit'}} target = '_blank' to = {{pathname: 'https://github.com/JS0Nwong'}}>
                    <YouTube width = {25} height = {25} fill = {props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}></YouTube>
                </NavLink>
            </motion.div>
            <Line color = {props.theme}
                initial = {{height: 0}}
                animate = {{height: '11rem'}}
                transition = {{type: 'spring', duration: 1}}
            />
        </Icons>
    )
}

export default Socials;