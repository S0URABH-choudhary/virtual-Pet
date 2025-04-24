import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default HomeLayout;
