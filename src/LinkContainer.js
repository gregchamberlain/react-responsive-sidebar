import React, { Component } from 'react';

export default class LinkContainer extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.href) {
      console.log(this.props.href);
    }
    this.props.onClick();
  }

  render() {

    return (
      <div
        style={this.props.style}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick}>
        {this.props.children}
      </div>
    );
  }
}
