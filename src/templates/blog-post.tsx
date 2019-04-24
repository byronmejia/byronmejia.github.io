import React, { FunctionComponent } from 'react';
import SEO from '../components/atomics/seo';
import { graphql, Link } from 'gatsby';
import { MainLayout } from '../layouts/main-layout';

interface BlogPostTemplatePropType {
    data: {
        markdownRemark: {
            frontmatter: {
                date: string;
                path: string;
                title: string;
            };
            html: string;
        };
    };
}

const BlogPostTemplate: FunctionComponent<BlogPostTemplatePropType> = ({ data }) => (
    <MainLayout>
        <Link to='/blog'>Back to Blog</Link>
        <SEO title={`Byron's Blog - ${data.markdownRemark.frontmatter.title}`} />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div>{data.markdownRemark.frontmatter.date}</div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </MainLayout>
);

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;

export default BlogPostTemplate;
