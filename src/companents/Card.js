import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="card">
          <div className="card-body">This is some text within a card body.</div>
        </div>
      </div>
    );
  }
}
