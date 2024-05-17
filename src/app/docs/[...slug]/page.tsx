import React from "react";

interface Props {
  params: { slug: string[] };
}

function SlugPage({ params }: Props) {
  return (
    <div>
      <h1>{params.slug[0]}</h1>
      <h1>{params.slug[1]}</h1>
    </div>
  );
}

export default SlugPage;
