import React from "react";

function Page(props) {
  document.title = `${props.title} | CITI BANK`;
  return <>{props.children}</>;
}

export default Page;
