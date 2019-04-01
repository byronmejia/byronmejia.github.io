import { FunctionComponent } from 'react';
import React from 'react';
import Logo from './logo';
import { styled } from '../../styles/styled';
import { Header } from '../ui/typography/header.main';
import { Paragraph } from '../ui/typography/paragraph';

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
        <Header as="h2">Software Developer @ Clipchamp</Header>
        <Paragraph style={{ textAlign: 'center' }}>
            I’m based in Fortitude Valley working as a front end developer at clipchamp. The
            software we write should tell the full story. Constant feedback from customers and
            creating product that they need is more important that perfecting an app for just
            yourself.
        </Paragraph>
    </ProfileWrapper>
);
