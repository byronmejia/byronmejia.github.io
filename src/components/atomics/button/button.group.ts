import { styled } from '../../../styles/styled';

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
    > :not(:last-child) {
        margin-right: 2em;
    }
`;
export default ButtonGroup;
