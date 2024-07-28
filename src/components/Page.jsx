import React, { useEffect } from "react";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | CITI BANK`;
  }, [props.title]);

  return <main className={props.className}>{props.children}</main>;
}

export default Page;
