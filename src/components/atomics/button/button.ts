import { styled } from '../../../styles/styled';

export const Button = styled.a`
    border: none;
    color: inherit;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    background-color: ${props => props.theme.primaryColor};
    padding: 0.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.5);
    transition: box-shadow 200ms ease-in-out;
    &:hover {
        box-shadow: 0.5em 0.5em 0.75em rgba(0, 0, 0, 0.5);
    }
    &:active {
        box-shadow: 1.5em 1.5em 0.75em rgba(0, 0, 0, 0.5);
    }
`;
export default Button;
