import React from 'react';
import styled from 'styled-components';

import Logo from '../../img/logo.png';

import { Burger } from './Burger';

const Nav = styled.nav`
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .logo{
        padding 15px o;
    }
`

export const Navbar = () => {
    return (
        <div>
            <Nav>
            <div>
            <img className="logo" src={Logo} alt="logo" />  
            </div>
            <Burger/>            
            </Nav>
        </div>
    )
}
