/* tslint:disable:jsx-no-lambda */
import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { SiteMenuLinksQuery } from './site-menu-links-query';
import BottomNav from '../components/ui/nav/bottom-nav';
import { styled } from '../styles/styled';

const PageContainer = styled.div`
    background-color: ${props => props.theme.primaryBackground};
`;

export const MenuLayout: FunctionComponent<{}> = props => (
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
            <PageContainer>
                {props.children}
                <BottomNav menuQuery={data} />
            </PageContainer>
        )}
    />
);
