import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../themes";
import {NavLink} from "react-router-dom";

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 1;
    
    &>*:first-child {
        text-decoration: none;
        color: inherit;
    }
`

const LogoComponent = (props) => {
    return (
        <Logo color = {props.theme}>
            <NavLink to = '/'>
                JW
            </NavLink>
        </Logo>
    )
}

export default LogoComponent;