import React, { Component, PropTypes } from 'react';
import LinkContainer from './LinkContainer';
import color from 'color';
import Radium from 'radium'

class SidebarItem extends Component {

  render() {

    const styles = getStyles(this.props);

    const { leftIcon, rightIcon, children, onClick, href } = this.props

    return (
      <LinkContainer
        style={styles.container}
        href={href}
        hoverHighlight={this.props.hoverHighlight}
        activeHighlight={this.props.activeHighlight}
        onClick={onClick}>
        <div style={styles.content}>
          {leftIcon}
          <div style={styles.text}>{children}</div>
          {rightIcon}
        </div>
      </LinkContainer>
    )
  }
}

SidebarItem.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  textAlign: PropTypes.string,
  hoverHighlight: PropTypes.string,
  activeHightlight: PropTypes.string,
  onClick: PropTypes.func,
}

SidebarItem.contextTypes = {
  router: React.PropTypes.object
}

const getStyles = (props) => {
  return {
    container: {
      background: props.background,
      color: props.color,
      fontSize: props.type === "header" ? '14px' : '18px',
      fontWeight: 700,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      padding: 15,
      boxSizing: 'border-box',
    },
    text: {
      flexGrow: 1,
      margin: '0px 15px',
      textAlign: props.textAlign,
    },
  }
}

export default Radium(SidebarItem);
