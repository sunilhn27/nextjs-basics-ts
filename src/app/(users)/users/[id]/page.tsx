import React from "react";

interface Props {
  params: { id: number };
}

function UserPageID({ params }: Props) {
  return <div>UserPageID {params.id}</div>;
}

export default UserPageID;
