import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

function PhotoIDPage({ params }: Props) {
  return <div>PhotoIDPage ID {params.id} photoID {params.photoId}</div>;
}

export default PhotoIDPage;
