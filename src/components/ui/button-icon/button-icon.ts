import { styled } from '../../../styles/styled';

export const ButtonIcon = styled.a`
    color: ${props => props.theme.primaryColor};
    transition: filter 200ms ease-in-out, color 200ms ease-out;
    &:hover {
        filter: drop-shadow(5px 3px 2px rgba(0, 0, 0, 0.7));
        color: ${props => props.theme.secondaryHighlight};
    }
`;

export default ButtonIcon;
