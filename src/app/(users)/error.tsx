"use client";
import React from "react";

function ErrorBoundry({ error, reset }: { error: Error; reset: () => void }) {
  return <div>ErrorBoundry {error.message}</div>;
}

export default ErrorBoundry;
