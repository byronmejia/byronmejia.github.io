import React, { Fragment } from 'react';
import SEO from '../components/seo';
import GlobalStyleWrapper from '../styles/global.style.wrapper';
import HomeLayout, { RegularLayout, ArticleLayout } from '../components/layouts/home';
import { ThemeProvider } from 'styled-components';
import PrimaryTheme, { SecondaryTheme } from '../styles/theme';
import { ProfileWrapper } from '../components/home/profile';
import Logo from '../components/home/logo';
import { Header } from '../components/ui/typography/header.main';
import ButtonGroup from '../components/ui/button/button.group';
import Button from '../components/ui/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Paragraph } from '../components/ui/typography/paragraph';
import { Columns } from '../components/layouts/columns';

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
            <Fragment>
                <HomeLayout>
                    <ProfileWrapper>
                        <Logo />
                        <Header>Byron Mejia</Header>
                        <Header as='p'>Software Developer @ Clipchamp</Header>
                        <ButtonGroup>
                            <Button
                                target='_blank'
                                href='https://github.com/byronmejia'
                                rel='noopener noreferrer'
                                aria-label='Github'
                            >
                                <FontAwesomeIcon icon={faGithub} size='4x' />
                            </Button>
                            <Button
                                target='_blank'
                                href='https://twitter.com/Byron__Mejia'
                                rel='noopener noreferrer'
                                aria-label='Twitter'
                            >
                                <FontAwesomeIcon icon={faTwitter} size='4x' />
                            </Button>
                            <Button
                                target='_blank'
                                href='https://www.linkedin.com/in/byronmejia/'
                                rel='noopener noreferrer'
                                aria-label='LinkedIn'
                            >
                                <FontAwesomeIcon icon={faLinkedin} size='4x' />
                            </Button>
                        </ButtonGroup>
                    </ProfileWrapper>
                </HomeLayout>
                <ThemeProvider theme={SecondaryTheme}>
                    <ArticleLayout style={{ width: '100vw', minHeight: '50vh' }}>
                        <ProfileWrapper style={{ textAlign: 'center' }}>
                            <Header>Who am I?</Header>
                            <Columns>
                                <div>
                                    <Paragraph>
                                        I’m based in Fortitude Valley working as a front end
                                        developer at Clipchamp. The software we write should tell
                                        the full story. Constant feedback from customers and
                                        creating product that they need is more important that
                                        perfecting an app for just yourself.
                                    </Paragraph>
                                    <Paragraph>
                                        I first began programming in my first year of university at
                                        QUT,
                                    </Paragraph>
                                </div>
                            </Columns>
                        </ProfileWrapper>
                    </ArticleLayout>
                </ThemeProvider>
            </Fragment>
        </ThemeProvider>
    </GlobalStyleWrapper>
);

export default IndexPage;
