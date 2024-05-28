"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface SessionProps {
  children: ReactNode;
}

function SessionWrapper({ children }: SessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionWrapper;
