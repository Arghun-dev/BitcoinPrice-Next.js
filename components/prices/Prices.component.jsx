import { useState } from "react";
import styles from "./Prices.module.scss";

const Prices = (props) => {
  const [currency, setCurrency] = useState("USD");
  console.log(props);

  const renderPrices = () => {
    switch (currency) {
      case "USD":
        return (
          <ul className="list-group">
            <li className="list-group-item">
              Bitcoin rate for{" "}
              <span className="badge badge-primary">
                {props.bpi.bpi.USD.description}
              </span>{" "}
              is:&nbsp;
              <span className="badge badge-warning">
                {props.bpi.bpi.USD.rate}
              </span>
            </li>
          </ul>
        );
      case "EUR":
        return (
          <ul className="list-group">
            <li className="list-group-item">
              Bitcoin rate for{" "}
              <span className="badge badge-primary">
                {props.bpi.bpi.EUR.description}
              </span>{" "}
              is:&nbsp;
              <span className="badge badge-warning">
                {props.bpi.bpi.EUR.rate}
              </span>
            </li>
          </ul>
        );
      case "GBP":
        return (
          <ul className="list-group">
            <li className="list-group-item">
              Bitcoin rate for{" "}
              <span className="badge badge-primary">
                {props.bpi.bpi.GBP.description}
              </span>{" "}
              is:&nbsp;
              <span className="badge badge-warning">
                {props.bpi.bpi.GBP.rate}
              </span>
            </li>
          </ul>
        );
    }
  };

  const selectPriceType = () => {
    return (
      <select
        className={styles.buttonContainer}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    );
  };

  return (
    <div>
      {renderPrices()}
      {selectPriceType()}
    </div>
  );
};

export default Prices;
