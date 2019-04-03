import { FunctionComponent } from 'react';
import { BlogPreviewNode } from './blog-preview.model';
import React from 'react';

export const BlogPreview: FunctionComponent<BlogPreviewNode> = props => (
    <div>
        <h2>{props.node.frontmatter.title}</h2>
        <time>{props.node.frontmatter.date}</time>
        <p>{props.node.excerpt}</p>
    </div>
);
