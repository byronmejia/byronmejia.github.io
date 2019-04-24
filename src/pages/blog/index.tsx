import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import React from 'react';
import SEO from '../../components/atomics/seo';
import { Header } from '../../components/atomics/typography/header.main';
import { BlogPreviewNode } from '../../components/blog/blog-preview.model';
import { BlogPreview } from '../../components/blog/blog-preview.component';
import { MainLayout } from '../../layouts/main-layout';

interface BlogIndexProps {
    data: {
        allMarkdownRemark: {
            edges: BlogPreviewNode[];
        };
    };
}

export const BlogIndex: FunctionComponent<BlogIndexProps> = props => {
    const posts = props.data.allMarkdownRemark.edges.map(x => x.node);
    return (
        <MainLayout>
            <SEO
                title='Blog'
                keywords={[
                    'blog',
                    'javascript',
                    'typescript',
                    'programming',
                    'byron',
                    'mejia',
                    'brisbane',
                    'health',
                    'fitness',
                    'life',
                    'agency',
                    'software',
                ]}
            />
            <Header>Blog</Header>
            {posts.map(post => (
                <BlogPreview key={post.frontmatter.title + post.frontmatter.title} node={post} />
            ))}
        </MainLayout>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        path
                    }
                }
            }
        }
    }
`;
