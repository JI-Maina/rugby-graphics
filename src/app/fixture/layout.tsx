import React, { ReactNode } from "react";

export default function FixtureLayout({ children }: { children: ReactNode }) {
  return <div className="bg-transparent">{children}</div>;
}
