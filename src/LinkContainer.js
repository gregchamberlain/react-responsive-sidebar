import React, { Component, PropTypes } from 'react';

export default class LinkContainer extends Component {


  onClick = () => {
    if (this.props.onClick) { this.props.onClick(); }
    if (!this.props.href) { return }
    if (this.context.router) {
      this.context.router.push(this.props.href);
    } else {
      window.location = this.props.href;
    }
  }

  render() {
    return (
      <div
        style={this.props.style}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onClick={this.onClick} >
        {this.props.children}
      </div>
    );
  }
}

LinkContainer.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.array,
};

LinkContainer.contextTypes = {
  router: React.PropTypes.object,
};
