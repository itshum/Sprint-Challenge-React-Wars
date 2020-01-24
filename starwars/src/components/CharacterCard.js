import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 40%;
    background: white;
    opacity: 0.9;
    color: grey;
    border-radius: 0% 0 0% 0;
    margin: 1.5rem 2rem;
`;

const CardTitle = styled.h3`
    margin-top: 0.3rem;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    color: blue;
    border-bottom: 4px solid #eca637;
`;

const CartP = styled.p`
    color: black;
    font-size: 1.2rem;
`;

const CharacterCard = props =>{
    return (
        <Card key={props.key}>
            <CardTitle>{props.name}</CardTitle>
            <CartP>Gender: {props.gender}</CartP>
            <CartP>Height: {props.height}</CartP>
            <CartP>Mass: {props.mass}</CartP>
            <CartP>Skin Color: {props.skinColor}</CartP>
        </Card>
    );
}

export default CharacterCard;