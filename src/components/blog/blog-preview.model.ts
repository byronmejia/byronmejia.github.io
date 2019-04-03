export interface BlogPreviewNode {
    node: {
        excerpt: string;
        frontmatter: {
            date: string;
            title: string;
        };
    };
}
