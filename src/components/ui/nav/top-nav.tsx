import React, { FunctionComponent } from 'react';
import { NavProps } from './nav';

export const TopNav: FunctionComponent<NavProps> = props => <nav>{JSON.stringify(props)}</nav>;

export default TopNav;
