export interface BlogPreviewNode {
    node: {
        excerpt: string;
        frontmatter: {
            date: string;
            path: string;
            title: string;
        };
    };
}
