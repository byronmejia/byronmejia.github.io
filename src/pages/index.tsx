import React from 'react';
import SEO from '../components/seo';
import GlobalStyleWrapper from '../styles/global.style.wrapper';
import HomeLayout from '../components/layouts/home';

const IndexPage = () => (
    <GlobalStyleWrapper>
        <SEO
            title='Byron Mejia'
            keywords={[`programming`, `health`, `developer`, `fitness`, `life`, `blog`]}
        />
        <HomeLayout>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
        </HomeLayout>
    </GlobalStyleWrapper>
);

export default IndexPage;
