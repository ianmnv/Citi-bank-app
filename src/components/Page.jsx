import React from "react";

function Page(props) {
  document.title = `${props.title} | CITI BANK`;
  return <div className={props.className}>{props.children}</div>;
}

export default Page;
