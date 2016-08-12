import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import SidebarItem from './SidebarItem';
import SidebarSelector from './SidebarSelector';
import Bars from 'react-icons/lib/fa/bars';
import LeftArrow from 'react-icons/lib/fa/chevron-left';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: window.innerWidth <= this.props.breakPoint,
      open: false,
    };
    this._toggle = this._toggle.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._close = this._close.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize(e) {
    if (window.innerWidth <= this.props.breakPoint && !this.state.collapsed) {
      this.setState({collapsed: true});
    }else if(window.innerWidth > this.props.breakPoint && this.state.collapsed){
      this.setState({collapsed: false});
    }
  }

  _close() {
    this.setState({open: false});
  }

  _toggle() {
    const open = !this.state.open;
    this.setState({open: open});
  }

  render() {

    const styles = getStyles(this.props, this.state);
    const _toggleIcon = this.state.open ? <LeftArrow /> : <Bars />;
    const content = this.props.content.map((el, idx) => React.cloneElement(el, {
       key: idx,
       background: el.props.background ?
       el.props.background : this.props.background
     }));

    return (
      <div>
        {/*Renders the children as the main content*/}
        <div style={styles.content}>{this.props.children}</div>
        {/*Renders the Sidebar with given input array children*/}
        <div style={styles.sidebar}>{content}</div>
        <div style={styles.toggle} onClick={this._toggle}>{_toggleIcon}</div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  width: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
  breakPoint: PropTypes.number,
  toggleIconSize: PropTypes.number,
  content: PropTypes.arrayOf(PropTypes.element)
};

Sidebar.defaultProps = {
  width: 300,
  background: '#009688',
  color: '#fff',
  breakPoint: 980,
  toggleIconSize: 28,
  content: []
};

let getStyles = (props, state) => {
  return {
    sidebar: {
      position: 'fixed',
      left: !state.collapsed || state.open ? 0 : -props.width,
      top: 0,
      bottom: 0,
      overflow: 'hidden',
      width: props.width,
      background: props.background,
      color: props.color,
      transition: 'left .5s ease-in',
    },
    content: {
      position: 'fixed',
      left: state.collapsed ? 0 : props.width,
      top: 0,
      right: 0,
      bottom: 0,
      overflowX: 'hidden',
      overflowY: 'scroll',
      transition: 'left .5s ease-in',
    },
    toggle: {
      position: 'fixed',
      fontSize: props.toggleIconSize,
      width: props.toggleIconSize,
      height: props.toggleIconSize,
      borderRadius: 5,
      top: state.collapsed ? 10 : -999,
      left: state.open ? props.width + 14 : 14,
      opacity: state.collapsed ? 1 : 0,
      cursor: 'pointer',
      textDecoration: 'none',
      color: props.background,
      transition: 'left .5s ease-in,opacity .5s .5s ease-in',
    },
  };
};



export default Radium(Sidebar);
