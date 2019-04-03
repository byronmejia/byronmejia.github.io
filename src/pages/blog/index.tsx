import { graphql } from 'gatsby';
import { FunctionComponent } from 'react';
import React from 'react';
import SEO from '../../components/seo';
import { Header } from '../../components/ui/typography/header.main';
import { BlogPreviewNode } from '../../components/blog/blog-preview.model';
import { BlogPreview } from '../../components/blog/blog-preview.component';

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
        <div>
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
        </div>
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
                    }
                }
            }
        }
    }
`;
