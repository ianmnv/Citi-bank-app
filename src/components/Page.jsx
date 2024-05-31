import React from "react";

function Page(props) {
  document.title = `CITI BANK | ${props.title}`;
  return <>{props.children}</>;
}

export default Page;
