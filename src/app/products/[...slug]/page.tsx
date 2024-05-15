import React from "react";

interface Props {
  params: { slug: string[] };
}
// GET /products/dresses/women/hat 200 in 80ms
function SlugPage({ params }: Props) {
  return <div>SlugPage {params.slug}</div>;
}

export default SlugPage;
