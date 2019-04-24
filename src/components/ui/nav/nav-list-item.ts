import { styled } from '../../../styles/styled';

export const NavListItem = styled.li`
    a {
        color: inherit;
        &.active {
            color: ${props => props.theme.secondaryBackground};
            font-weight: bolder;
        }
    }
`;

export default NavListItem;
