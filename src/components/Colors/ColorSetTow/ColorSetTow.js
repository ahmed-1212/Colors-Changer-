import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';

const SetTowTitle = styled.p`
    font-size: 14px;
`

const ColorSetTowWrapper = styled.div`
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

const DarkColor = styled.div`
    width: 45px;
    height: 45px;
    margin: 0 20px 0 0;
    background-color: ${props => props.backColor};
    border-radius: 3px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.2, 1.2);
    };

    @media only screen and (max-width: 950px) {
        margin: 0 0 10px 0;
        }

`

const ColorSetTow = props => {
    


    return (
        <ColorSetTowWrapper>
            <SetTowTitle>Dark Colors</SetTowTitle>
            <div >
                <DarkColor onClick={props.changeOne} backColor={props.colO} />   
                <DarkColor onClick={props.changeTow} backColor={props.colT} />
                <DarkColor onClick={props.changeThree} backColor={props.colH} />
                <DarkColor onClick={props.changeFour} backColor={props.colF} />
                <DarkColor onClick={props.changeFive} backColor={props.colV} />
            </div>
        </ColorSetTowWrapper>
    )

}

const mapStateToProps = state => {
    return {
        colO: state.lightSix,
        colT: state.lightSeven,
        colH: state.lightEight,
        colF: state.lightNine,
        colV: state.lightTen,
    }
}

const mapDispatchToProps = dispatch => {

    return {
        changeOne: ()  => dispatch({type: 'COLOR_I'}),
        changeTow: ()  => dispatch({type: 'COLOR_E'}),
        changeThree: ()  => dispatch({type: 'COLOR_G'}),
        changeFour: ()  => dispatch({type: 'COLOR_N'}),
        changeFive: ()  => dispatch({type: 'COLOR_X'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSetTow);