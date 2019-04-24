/* tslint:disable:jsx-no-lambda */
import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { SiteMenuLinksQuery } from './site-menu-links-query';
import BottomNav from '../components/ui/nav/bottom-nav';
import { styled } from '../styles/styled';
import PrimaryTheme from '../styles/theme';
import GlobalStyleWrapper from '../styles/global.style.wrapper';
import { ThemeProvider } from 'styled-components';
import TopNav from '../components/ui/nav/top-nav';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const Content = styled.div`
    flex: 1;
`;

export const MainLayout: FunctionComponent<{}> = props => (
    <StaticQuery
        query={graphql`
            query SiteMenuLinksQuery {
                site {
                    siteMetadata {
                        menuLinks {
                            name
                            link
                        }
                    }
                }
            }
        `}
        render={(data: SiteMenuLinksQuery) => (
            <GlobalStyleWrapper>
                <ThemeProvider theme={PrimaryTheme}>
                    <PageContainer>
                        <TopNav menuQuery={data} />
                        <Content>{props.children}</Content>
                        <BottomNav menuQuery={data} />
                    </PageContainer>
                </ThemeProvider>
            </GlobalStyleWrapper>
        )}
    />
);
