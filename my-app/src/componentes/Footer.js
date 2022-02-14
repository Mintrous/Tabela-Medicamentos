import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import styled from 'styled-components';

import React from 'react'

function Footer(){
    return (
            <Rodape>
                <Header>
                    <Copyright><CopyrightIcon></CopyrightIcon></Copyright>
                    <span>GAFio Devs, 2020 - 2021</span>
                    <Github><GitHubIcon></GitHubIcon></Github>
                </Header>
            </Rodape>
    )
}

export default Footer

const Rodape = styled.div`
    span{
        color: #505050;
        font-size: 23px;
    }
    align-items: center;
    background-image: linear-gradient(90deg,#426980,#bad6ff);
    margin-left: 90px;
    margin-right: 90px;
    margin-top: 50px;
    border-radius: 6px;
`
const Copyright = styled.div`
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;  
`
const Github = styled.div`
    display: flex;
    margin-left: 12px;
    cursor: pointer;
    align-items: center;
`
const Header = styled.div`
    color: #505050;
    display: flex;
    padding: 12px;
    justify-content: center;
`