import { styled } from '../../styles/styled';

// tslint:disable: max-line-length
const Logo = styled.div`
    height: 15em;
    width: 15em;
    border-radius: 50%;
    background: url(https://render.bitstrips.com/v2/cpanel/10220069-circle-306672728_4-s4-v1.png?transparent=1&palette=1)
        center 3px / auto 15em no-repeat ${props => props.theme.secondaryColor};
    box-shadow: 0.5em 0.5em 0.75em rgba(0, 0, 0, 0.5);
`;

export default Logo;
