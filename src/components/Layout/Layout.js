import React, { Component } from 'react';
import styled from 'styled-components';
import ColorSetOne from '../Colors/ColorsSetOne/ColorSetOne';
import ColorSetTow from '../Colors/ColorSetTow/ColorSetTow';


export  const LayoutWrapper = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width: 30%;
    height: 100%;
    background-color: #f9f9f9;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.2) !important;
    padding: 20px;
    @media only screen and (max-width: 950px) {
        width: 20%
    }
`

const BigTitle = styled.h2`
    color: #444;
    font-size: 16px;
    @media only screen and (max-width: 950px) {
        display: none
    }

`
const ColorSetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;

    @media only screen and (max-width: 950px) {
        justify-content: space-around;
        height: 90%
    }
`
class Layout extends Component {
    render () {
        return (
            <LayoutWrapper>
                <BigTitle>Choose Any Color To Apply It To The Background</BigTitle>
                <ColorSetWrapper>
                    <ColorSetOne />
                    <ColorSetTow />
                </ColorSetWrapper>
            </LayoutWrapper>
        )
    }
}



export default Layout;