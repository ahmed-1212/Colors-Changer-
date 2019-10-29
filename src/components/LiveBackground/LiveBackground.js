import React from 'react';
import styled from 'styled-components';

const LivingRoomBackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url('https://www.customwallpaper.net.au/wp-content/themes/customwallpaper/images/cw_lounge.png') center no-repeat;
    background-size: cover;
    width: 68%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    background-color: ${props => props.backColor};
    transition: all .3s ease-out;
    
    @media only screen and (max-width: 950px) {
        width: 76%;
    }

`

const LivingRoomBackground = props => {
    return(
        <LivingRoomBackgroundWrapper backColor={props.backColor}  />
    )
}

export default LivingRoomBackground;