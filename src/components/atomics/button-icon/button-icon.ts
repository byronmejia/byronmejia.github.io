import { styled } from '../../../styles/styled';

export const ButtonIcon = styled.a`
    color: ${props => props.theme.primaryColor};
    transition: filter 200ms ease-in-out, color 200ms ease-out;
    &:hover {
        filter: drop-shadow(3px 3px 2px rgba(70, 70, 70, 1));
        color: ${props => props.theme.secondaryHighlight};
    }
`;

export const ButtonIconWithCaption = styled(ButtonIcon)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default ButtonIcon;
