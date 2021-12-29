import React from "react";
import styled from "styled-components";
import { PowerBtn } from "../svgs";
import {NavLink} from "react-router-dom";

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
                <h1>Dark Mode</h1>
            </NavLink>
        </Power>
    )
}

export default PowerButton;