import React from "react";

export type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="w-screen h-screen bg-base-100">{children}</div>;
};

export default MainLayout;
