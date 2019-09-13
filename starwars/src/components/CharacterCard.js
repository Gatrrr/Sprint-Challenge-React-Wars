import React from "react";
import styled from "styled-components";

const Card = styled.div`
background: #99f3eb;
color: black;
width: 300px;
max-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
`

const CardH1 = styled.h1`
    font-size: 2rem;
`

const CardH3 = styled.h3`
    font-size: 1.5rem;
`


const CharacterCard = props =>{

    console.log(props)
        return(
            <Card>
            <CardH1>{props.name}</CardH1>
            <CardH3>{props.height}</CardH3>
            <CardH3>{props.gender}</CardH3>
            </Card>
        )
}

export default CharacterCard;