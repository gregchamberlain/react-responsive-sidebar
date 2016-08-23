import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class LinkContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }

  onClick = () => {
    this.props.onClick(this.props);
    if (!this.props.href) { return }
    if (this.props.href.indexOf("http") === 0) {
      window.location = this.props.href;
      return;
    }
    if (this.context.router) {
      this.context.router.push(this.props.href);
    } else {
      window.location = this.props.href;
    }
  }

  render() {

    const active = window.location.pathname === this.props.href

    const styles = getStyles(this.props, active)

    return (
      <div style={this.props.style}>
      <div onClick={this.onClick} style={styles.container}>
        {this.props.children}
      </div>
      </div>
    );
  }
}

LinkContainer.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  hoverHighlight: PropTypes.string,
  activeHightlight: PropTypes.string,
};

LinkContainer.defaultProps = {
  onClick: () => {},
  style: {},
};

LinkContainer.contextTypes = {
  router: React.PropTypes.object,
};

const getStyles = (props, active) => {
  return {
    container: {
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      background: active ? props.activeHighlight || 'rgba(0, 0, 0, 0.2)' : null,
      ':hover': {
        background: props.hoverHighlight || 'rgba(0, 0, 0, 0.15)'
      },
    },
  }
}

export default Radium(LinkContainer);
