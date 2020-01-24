import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 30%;
    background: white;
    opacity: 0.9;
    color: grey;
    border-radius: 10% 0 15% 0;
    margin: 1rem 3rem;
    box-shadow: 1rem 0.5rem 0.5rem #5f6f77;
`;

const CardTitle = styled.h3`
    margin-top: 0.2rem;
    padding: 0.5rem 0;
    font-size: 1.5rem;
    color: blue;
    border-bottom: 4px solid #eca637;
`;

const CartP = styled.p`
    color: #121b26;
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