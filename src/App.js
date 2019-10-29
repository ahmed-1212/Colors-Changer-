import React from 'react';
import { createGlobalStyle  } from 'styled-components';
import Layout from './components/Layout/Layout';
import LivingRoomBackground from './components/LiveBackground/LiveBackground';
import { connect } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    width: 70%;
  }
`

function App(props) {
  return (

    <div>

      <GlobalStyle />
      <Layout />
      <LivingRoomBackground backColor={props.backColor} /> 

    </div>
  );
}

const mapStateToProps = state => {
  return {
    backColor: state.backColor,
  }
}
export default connect(mapStateToProps)(App);
