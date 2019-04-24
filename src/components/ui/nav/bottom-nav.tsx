import React, { FunctionComponent } from 'react';
import { NavProps } from './nav';
import { styled } from '../../../styles/styled';
import NavList from './nav-list';
import { Link } from 'gatsby';
import NavListItem from './nav-list-item';
import { Paragraph } from '../../atomics/typography/paragraph';

export const BottomNavGroup = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const BottomNavContainer = styled.div`
    display: flex;
    > :not(:last-child) {
        margin-right: 10em;
    }
`;

export const FooterContainer = styled.footer`
    color: ${props => props.theme.primaryColor};
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BottomNav: FunctionComponent<NavProps> = props => (
    <FooterContainer>
        <BottomNavContainer>
            <Paragraph>
                Byron Mejia <br /> software developer, dog owner, and stuff
            </Paragraph>
            <BottomNavGroup>
                <NavList>
                    {props.menuQuery.site.siteMetadata.menuLinks.map(link => (
                        <NavListItem key={link.link}>
                            <Link to={link.link} activeClassName='active'>
                                {link.name}
                            </Link>
                        </NavListItem>
                    ))}
                </NavList>
            </BottomNavGroup>
        </BottomNavContainer>
        <Paragraph>ABN: 79 833 467 197</Paragraph>
    </FooterContainer>
);

export default BottomNav;
