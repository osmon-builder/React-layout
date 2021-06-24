import React, { useState } from 'react';
import styled from 'styled-components';
import { Completenav } from './Completenav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;    
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#4B0082'};
        border-radius: 10px;
        transform-origin: 1px;     
        transition: all 0.3s linear;  
    }

    
`

export const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Completenav open = {open}/>
        </>
    )
}
