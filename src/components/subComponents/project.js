import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid ${props => props.theme.text};
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: calc(1rem + 1.5vw);
`

const Description = styled.p`
    font-size: calc(0.6rem + 1vw);
`
const Tags = styled.div`

`

const Links = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    text-decoration: none;
`

const Project = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            {/* <Tags>
                {tags}
            </Tags>
            <Links>
                {demo}
                {github}
            </Links> */}
            
            
        </Box>
    )
}

export default Project;