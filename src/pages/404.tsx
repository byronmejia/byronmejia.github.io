import React, { FunctionComponent } from "react"

import SEO from "../components/seo"

const NotFoundPage: FunctionComponent<void> = () => (
  <div>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist...</p>
  </div>
);

export default NotFoundPage;
