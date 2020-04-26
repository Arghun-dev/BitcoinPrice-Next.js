// components
import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout/Layout";
import Prices from "../components/prices/Prices.component";

// styles
import styles from "./index.module.scss";

const Index = (props) => {
  return (
    <Layout>
      <h1 className={styles.heading}>Welcome to Bitzprice</h1>
      <Prices bpi={props.data} />
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    data: data,
  };
};

export default Index;
