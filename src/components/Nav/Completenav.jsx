import React, { useState } from 'react'
import styled from 'styled-components'


import Popup from '../hooks/Seacrh'

const Ul = styled.ul`

    list-style:none;
    display:flex;
    flex-flow: row nowrap;
    
    li{
        padding: 18px 10px;
        cursor:pointer; 
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

    const [visible, setVisible] = useState(false)

    const togglePopup = () =>{
        setVisible(!visible);
    }
    return (
        <div>
              <Ul open={open}>
                <li>All</li>
                <li>Branding</li>
                <li>Web</li>
                <li>Photography</li>
                <li>App</li>
                <li>
                                                                     
                    <input                         
                        className="btn btn-primary"
                        type ="button"                       
                        value="search"
                        onClick={togglePopup} 
                    />
                    <i class="bi bi-search"></i>
                    {visible && < Popup
                        content={<>
                            <input placeholder="search"/>
                        </>}
                        handleClose={togglePopup}/>
                    }
                                        
                </li>
            </Ul>
        </div>
    )
}
