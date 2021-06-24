import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`

    list-style:none;
    display:flex;
    flex-flow: row nowrap;
    
    li{
        padding: 18px 10px;
    }

    @media (max-width: 768px) {        
        flex-flow: column nowrap;
        background-color: #4B0082;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        
        

        li{
            color: #fff;
            text-align: center;
        }
    }
`
export const Completenav = ({open}) => {
    return (
        <div>
              <Ul open={open}>
                <li>All</li>
                <li>Branding</li>
                <li>Web</li>
                <li>Photography</li>
                <li>App</li>
                <li class="bi bi-search">Search</li>
            </Ul>
        </div>
    )
}
