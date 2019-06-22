import { createRef, FunctionComponent, useEffect } from 'react';
import * as React from 'react';
import { styled } from '../../styles/styled';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';

export const CanvasStyled = styled.canvas`
    position: absolute;
    background: transparent;
    z-index: -1;
    width: 100%;
    height: 100%;
`;

export const Stars: FunctionComponent = () => {
    const canvasRef = createRef<HTMLCanvasElement>();
    const onDestroy = new Subject<void>();
    const DEBOUNCE_RESIZE_MS = 500;

    useEffect(() => {
        const initCanvas = canvasRef.current!;
        const context = canvasRef.current!.getContext('2d');
        if (!context) {
            return;
        }
        const { width: widthInit, height: heightInit } = canvasRef.current!.getBoundingClientRect();
        initCanvas.width = widthInit;
        initCanvas.height = heightInit;

        fromEvent(window, 'resize')
            .pipe(
                startWith({}),
                debounceTime(DEBOUNCE_RESIZE_MS),
                takeUntil(onDestroy)
            )
            .subscribe(() => {
                const { width, height } = canvasRef.current!.getBoundingClientRect();
                initCanvas.width = width;
                initCanvas.height = height;
            });

        return () => {
            onDestroy.next();
            onDestroy.complete();
        };
    }, []);

    return <CanvasStyled ref={canvasRef} />;
};

export default Stars;
