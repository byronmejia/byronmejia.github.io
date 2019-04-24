import { FunctionComponent } from 'react';
import { BlogPreviewNode } from './blog-preview.model';
import React from 'react';
import { Link } from 'gatsby';

export const BlogPreview: FunctionComponent<BlogPreviewNode> = props => (
    <Link to={props.node.frontmatter.path}>
        <h2>{props.node.frontmatter.title}</h2>
        <time>{props.node.frontmatter.date}</time>
        <p>{props.node.excerpt}</p>
    </Link>
);
