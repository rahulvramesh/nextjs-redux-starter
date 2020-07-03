import React, { PureComponent } from "react";
import Link from "next/link";

import HeaderBar from "../containers/HeaderBar";

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="gh-container">
        <header>
          <HeaderBar />
        </header>
        {this.props.children}
      </div>
    );
  }
}
