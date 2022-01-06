import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from 'framer-motion';

const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background: none;
    padding: 0.3rem;
    border: none;
    
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 3;

    cursor: pointer;

    &>*:first-child {
        text-decoration: none;
        color: inherit;
    }

`

const PowerButton = () => {
    return (
        <Power>
            <NavLink to="/">
                {/* <PowerBtn width = {30} height = {30} fill = 'currentColor'/> */}
                <motion.h1 fill = 'currentColor'
                    initial = {{y: -200, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                    animate  = {{y: 0, transition: {type: 'spring', duration: 0.5, delay: 1}}}
                    whileHover={{scale: 1.1,}}
                    whileTap={{scale: 0.9}}
                >Dark Mode</motion.h1>
            </NavLink>
        </Power>
    )
}

export default PowerButton;