import React from "react";
import Header from "./Header";

export default function Main(props) {
  return (
    <>
      <Header />
      <main className="main_wrap" role="main">
        {props.children}
      </main>
    </>
  );
}
