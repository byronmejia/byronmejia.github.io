import React, { FunctionComponent } from 'react';

export const MenuLayout: FunctionComponent<{}> = props => (
    <div>
        <nav />
        {props.children}
        <nav />
    </div>
);
