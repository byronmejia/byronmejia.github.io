import { styled } from "../../styles/styled";

export const HomeLayout = styled.div`
    display: flex;
    background-color: ${props => props.theme.primaryBackground};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export default HomeLayout;
