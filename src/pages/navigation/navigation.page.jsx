import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/search-bar.component";

const Navigation = () => {
  return (
    <>
    <header>
      <h3>MovieSearch</h3>
     <SearchBar/>
    </header>
    <Outlet/>
    </>
  );
};

export default Navigation;
