import { styled } from '../../styles/styled';
import React, { FunctionComponent } from 'react';

export const ColumnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Columns: FunctionComponent<{}> = props => (
    <ColumnsContainer>{props.children}</ColumnsContainer>
);
