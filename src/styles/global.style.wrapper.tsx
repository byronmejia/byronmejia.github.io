import React, { FunctionComponent, Fragment } from 'react';
import GlobalStyle from './global';

const GlobalStyleWrapper: FunctionComponent = ({ children }) => (
    <Fragment>
        <GlobalStyle />
        {children}
    </Fragment>
);

export default GlobalStyleWrapper;
