import styled from 'styled-components';
import GlobalVariables from '../../styles/global-variables';

export const HomeLayout = styled.div`
    display: flex;
    background-color: ${GlobalVariables.primaryBackground};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export default HomeLayout;
