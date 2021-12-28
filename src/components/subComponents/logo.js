import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../themes";

const Logo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico', cursive;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 1;
`

const LogoComponent = (props) => {
    return (
        <Logo color = {props.theme}>
            JW
        </Logo>
    )
}

export default LogoComponent;