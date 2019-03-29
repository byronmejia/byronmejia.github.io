import baseStyled, { ThemedStyledInterface } from 'styled-components';
import PrimaryTheme from './theme';

export type Theme = typeof PrimaryTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
