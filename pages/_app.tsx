import React, { Fragment, Component } from 'react';
import App from 'next/app';
import {wrapper} from '../redux/store/index';
import GlobalStyle from '../styles/global.style';

class WrappedApp extends App<Component> {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <Fragment>
                <GlobalStyle />
                <div className="App">
                    <Component {...pageProps} />
                </div>
            </Fragment>
        );
    }
}

export default wrapper.withRedux(WrappedApp);