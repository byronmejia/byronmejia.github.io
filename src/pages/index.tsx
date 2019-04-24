import React from 'react';
import SEO from '../components/atomics/seo';
import GlobalStyleWrapper from '../styles/global.style.wrapper';
import HomeLayout, { ArticleLayout } from '../components/layouts/home';
import { ThemeProvider } from 'styled-components';
import PrimaryTheme, { SecondaryTheme } from '../styles/theme';
import { ProfileWrapper } from '../components/home/profile';
import Logo from '../components/home/logo';
import { Header } from '../components/atomics/typography/header.main';
import ButtonGroup from '../components/atomics/button/button.group';
import ButtonIcon from '../components/atomics/button-icon/button-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { Paragraph } from '../components/atomics/typography/paragraph';
import { Columns } from '../components/layouts/columns';
import { MenuLayout } from '../layouts/menu.layout';

const IndexPage = () => (
    <GlobalStyleWrapper>
        <SEO
            title='Full Stack Developer, Tooling Fanatic, Dog Owner'
            keywords={[
                'programming',
                'health',
                'developer',
                'fitness',
                'life',
                'blog',
                'Brisbane',
                'digital',
                'Angular',
                'React',
                'TypeScript',
            ]}
            // tslint:disable-next-line: max-line-length
            description='I am a full stack developer based in Brisbane, Australia. Follow me on my life journey in programming, health and being a dog owner. Contact me if you need help with Angular, React, Typescript and node.js'
        />
        <ThemeProvider theme={PrimaryTheme}>
            <MenuLayout>
                <HomeLayout>
                    <ProfileWrapper>
                        <Logo />
                        <Header>Byron Mejia</Header>
                        <Paragraph style={{ textAlign: 'center' }}>
                            I'm not a magician, but tricking computers into creating experiences
                            comes pretty close to magic. <br />
                            We call that <code>Programming</code>
                        </Paragraph>
                        <ButtonGroup>
                            <ButtonIcon
                                target='_blank'
                                href='https://twitter.com/Byron__Mejia'
                                rel='noopener noreferrer'
                                aria-label='Twitter'
                            >
                                <FontAwesomeIcon icon={faTwitter} size='4x' />
                            </ButtonIcon>
                            <ButtonIcon
                                target='_blank'
                                href='https://www.linkedin.com/in/byronmejia/'
                                rel='noopener noreferrer'
                                aria-label='LinkedIn'
                            >
                                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                            </ButtonIcon>
                            <ButtonIcon
                                target='_blank'
                                href='https://github.com/byronmejia'
                                rel='noopener noreferrer'
                                aria-label='Source Code'
                            >
                                <FontAwesomeIcon icon={faCode} size='4x' />
                            </ButtonIcon>
                        </ButtonGroup>
                    </ProfileWrapper>
                </HomeLayout>
                <ArticleLayout style={{ width: '100vw', minHeight: '50vh' }}>
                    <ProfileWrapper style={{ textAlign: 'center' }}>
                        <Header>Who am I?</Header>
                        <Columns>
                            <div>
                                <Paragraph>
                                    I’m based in Fortitude Valley working as a front end developer
                                    at Clipchamp. The software we write should tell the full story.
                                    Constant feedback from customers and creating product that they
                                    need is more important that perfecting an app for just yourself.
                                </Paragraph>
                                <Paragraph>
                                    I first began programming in my first year of university at QUT,
                                    back in 2013. My introduction to programming was MATLAB, and
                                    have since dabbled in a little bit of everything. My time in
                                    university primarily focused on embedded systems (C, TivaOS),
                                    but also spent the time to learn modern front end development
                                    frameworks, and am now proficient both React and Angular (2+).
                                </Paragraph>
                            </div>
                        </Columns>
                    </ProfileWrapper>
                </ArticleLayout>
            </MenuLayout>
        </ThemeProvider>
    </GlobalStyleWrapper>
);

export default IndexPage;
