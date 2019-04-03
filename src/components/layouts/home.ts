import { styled } from '../../styles/styled';

export const RegularLayout = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const HomeLayout = styled(RegularLayout)`
    background-color: ${props => props.theme.primaryBackground};
    width: 100vw;
    height: 100vh;
`;

export const ArticleLayout = styled(HomeLayout)`
    width: unset;
    height: unset;
`;

export default HomeLayout;
