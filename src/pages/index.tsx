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
            title='Byron Mejia'
            keywords={[`programming`, `health`, `developer`, `fitness`, `life`, `blog`]}
        />
        <ThemeProvider theme={PrimaryTheme}>
            <HomeLayout>
                <Profile />
            </HomeLayout>
        </ThemeProvider>
    </GlobalStyleWrapper>
);

export default IndexPage;
