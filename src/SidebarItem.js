import React, { Component } from 'react';
import LinkContainer from './LinkContainer';
import color from 'color';

export default class SidebarItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  onMouseEnter() {
    this.setState({hover: true});
  }

  onMouseLeave() {
    this.setState({hover: false});
  }

  render() {

    let background = this.props.background;
    const type = this.props.type;
    if (type === "header") {
      if (this.state.hover) {
        background = color(this.props.background).darken(0.4).hexString();
      } else {
        background = color(this.props.background).darken(0.3).hexString();
      }
    } else if (type === "selector") {
      if (this.state.hover) {
        background = color(this.props.background).darken(0.25).hexString();
      } else {
        background = color(this.props.background).darken(0.2).hexString();
      }
    } else if (this.state.hover) {
      background = color(this.props.background).lighten(0.4).hexString();
    }else if(this.props.href && this.context.router.isActive(this.props.href)) {
      background = color(this.props.background).lighten(0.3).hexString();
    }

    const conatinerStyle = {
      width: '100%',
      height: '48px',
      background: background,
      color: this.props.color,
      lineHeight: '30px',
      textAlign: type === "header" ? 'right' : 'left',
      fontSize: type === "header" ? '14px' : '18px',
      fontWeight: 700,
      padding: '10px 14px',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }

    const iconStyle = {
      float: 'left',
      marginRight: '14px'
    }

    const selectorIconStyle = {
      float: 'right'
    }


    const icon = this.props.icon ? type === "selector" ? null : <div style={iconStyle}>{this.props.icon}</div> : null
    const selectorIcon = type === "selector" ? <div style={selectorIconStyle}>{this.props.icon}</div> : null

    return (
      <LinkContainer
        style={conatinerStyle}
        href={this.props.href}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick}>
        {icon}
        {this.props.title}
        {selectorIcon}
      </LinkContainer>
    )
  }
}
//
SidebarItem.contextTypes = {
  router: React.PropTypes.object
}
