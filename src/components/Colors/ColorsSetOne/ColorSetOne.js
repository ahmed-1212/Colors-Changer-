import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';

const SetOneTitle = styled.p`
    font-size: 14px;
`

const ColorSetOneWrapper = styled.div`
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        @media only screen and (max-width: 950px) {
        flex-direction: column;
        }
    }
`

const LightColors = styled.div`
    width: 45px;
    height: 45px;
    margin: 0 20px 0 0;
    background-color: ${props => props.backColor};
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.2, 1.2)
    }

    &:active {
        transform: scale(1.2, 1.2)
    }

    @media only screen and (max-width: 950px) {
        margin: 0 0 10px 0;
        }

`

const ColorSetOne = props => {
    


    return (
        <ColorSetOneWrapper>
            <SetOneTitle>Light Colors</SetOneTitle>
            <div >
                <LightColors onClick={props.changeOne} backColor={props.colO} />   
                <LightColors onClick={props.changeTow} backColor={props.colT} />
                <LightColors onClick={props.changeThree} backColor={props.colH} />
                <LightColors onClick={props.changeFour} backColor={props.colF} />
                <LightColors onClick={props.changeFive} backColor={props.colV} />
            </div>
        </ColorSetOneWrapper>
    )

}

const mapStateToProps = state => {
    return {
        colO: state.lightOne,
        colT: state.lightTow,
        colH: state.lightThree,
        colF: state.lightFour,
        colV: state.lightFive,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        changeOne: ()  => dispatch({type: 'COLOR_O'}),
        changeTow: ()  => dispatch({type: 'COLOR_T'}),
        changeThree: ()  => dispatch({type: 'COLOR_H'}),
        changeFour: ()  => dispatch({type: 'COLOR_F'}),
        changeFive: ()  => dispatch({type: 'COLOR_V'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSetOne);