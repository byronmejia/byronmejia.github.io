export interface SiteMenuLinksQuery {
    site: {
        siteMetadata: {
            menuLinks: {
                link: string;
                name: string;
            }[];
        };
    };
}
