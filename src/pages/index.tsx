import React from 'react';
import SEO from '../components/seo';
import GlobalStyleWrapper from '../styles/global.style.wrapper';
import HomeLayout from '../components/layouts/home';
import { ThemeProvider } from 'styled-components';
import PrimaryTheme from '../styles/theme';
import { Profile } from '../components/home/profile';

const IndexPage = () => (
    <GlobalStyleWrapper>
        <SEO
            title="Full Stack Developer, Tooling Fanatic, Dog Owner"
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
            description="I am a full stack developer based in Brisbane, Australia. Follow me on my life journey in programming, health and being a dog owner. Contact me if you need help with Angular, React, Typescript and node.js"
        />
        <ThemeProvider theme={PrimaryTheme}>
            <HomeLayout>
                <Profile />
            </HomeLayout>
        </ThemeProvider>
    </GlobalStyleWrapper>
);

export default IndexPage;
