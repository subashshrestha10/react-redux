import React from "react";
import "./detail.styles.css";
import { connect } from "react-redux";

const Details = ({ items }) => {
  return (
    <div>
      <div>Details</div>

      <table>
        <tr>
          <th>Items</th>
          <th>Sales</th>
        </tr>
        {items.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.sales}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    items: Object.keys(state).reduce((acc, item) => {
      let itemObj = {};
      itemObj["name"] = item;
      itemObj = { ...itemObj, ...state[item] };
      acc.push(itemObj);
      return acc;
    }, []),
  };
};

export default connect(mapPropsToState)(Details);
