import { FunctionComponent } from 'react';
import React from 'react';
import Logo from './logo';
import { styled } from '../../styles/styled';
import { Header } from '../ui/typography/header.main';
import ButtonGroup from '../ui/button/button.group';
import Button from '../ui/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <Header as="p">Software Developer @ Clipchamp</Header>
        {/* <Paragraph style={{ textAlign: 'center' }}>
            I’m based in Fortitude Valley working as a front end developer at clipchamp. The
            software we write should tell the full story. Constant feedback from customers and
            creating product that they need is more important that perfecting an app for just
            yourself.
        </Paragraph> */}
        <ButtonGroup>
            <Button target="_blank" href="https://github.com/byronmejia" rel="noopener noreferrer" aria-label="Github">
                <FontAwesomeIcon icon={faGithub} size="4x" />
            </Button>
            <Button target="_blank" href="https://twitter.com/Byron__Mejia" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="4x" />
            </Button>
            <Button target="_blank" href="https://www.linkedin.com/in/byronmejia/" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </Button>
        </ButtonGroup>
    </ProfileWrapper>
);
