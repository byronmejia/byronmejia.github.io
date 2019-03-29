import { FunctionComponent } from 'react';
import React from 'react';
import Logo from './logo';
import { styled } from '../../styles/styled';
import { Header } from '../ui/typography/header.main';

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
`;

export const Profile: FunctionComponent = () => (
    <ProfileWrapper>
        <Logo />
        <Header>Byron Mejia</Header>
        <Header as='h2'>Software Developer @ Clipchamp</Header>
    </ProfileWrapper>
);
