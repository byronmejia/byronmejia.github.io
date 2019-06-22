import { createRef, FunctionComponent } from 'react';
import * as React from 'react';
import { styled } from '../../styles/styled';

export const CanvasStyled = styled.canvas`
    position: absolute;
    background: transparent;
    z-index: -1;
    width: 100%;
    height: 100%;
`;

export const Stars: FunctionComponent = () => {
    const canvasRef = createRef<HTMLCanvasElement>();

    return <CanvasStyled ref={canvasRef} />;
};

export default Stars;
