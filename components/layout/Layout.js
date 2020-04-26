import Header from "../header/header.component";

import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Bitz Price</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css"
        />
      </Head>
      <Header />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
