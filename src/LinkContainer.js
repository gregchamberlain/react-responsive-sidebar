import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class LinkContainer extends Component {


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
  children: PropTypes.array,
};

LinkContainer.contextTypes = {
  router: React.PropTypes.object,
};

export default Radium(LinkContainer);
