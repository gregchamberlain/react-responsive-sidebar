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
        onClick={onClick}>
        {leftIcon}
        <div style={styles.content}>{children}</div>
        {rightIcon}
      </LinkContainer>
    )
  }
}

SidebarItem.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  textAlign: PropTypes.string,
  onClick: PropTypes.func,
}

SidebarItem.defaultProps = {
  textAlign: 'left',
}

SidebarItem.contextTypes = {
  router: React.PropTypes.object
}

const getStyles = (props) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      background: props.background,
      color: props.color,
      textAlign: props.textAlign,
      fontSize: props.type === "header" ? '14px' : '18px',
      fontWeight: 700,
      padding: '10px 14px',
      boxSizing: 'border-box',
      cursor: 'pointer',
      ':hover': {
        background: props.highlight || "rgba(255, 255, 255, .2)",
      },
    },
    content: {
      flexGrow: 1,
      margin: '0px 15px'
    },
  }
}

export default Radium(SidebarItem);
