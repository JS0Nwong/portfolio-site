import React from "react";
import styled from "styled-components";
import PowerButton from "./subComponents/button";
import LogoComponent from "./subComponents/logo";
import Socials from "./subComponents/socials";

const MainContainer = styled.div`   
    
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`
const Container = styled.div`
    background: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: auto;
    position: relative;
    padding-bottom 5rem;

`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`

const blog = () => {
    return (
        <MainContainer>
            <Container>
                <LogoComponent/>
                {/* <PowerButton/> */}
                <Socials/>

                <Center>
                    <h1></h1>
                </Center>
            </Container>
        </MainContainer>
    )
}

export default blog;