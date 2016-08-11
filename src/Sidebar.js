import React, { Component } from 'react';
import SidebarItem from './SidebarItem.prototype';
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

    const sidebarStyle = {
      position: 'fixed',
      left: !this.state.collapsed || this.state.open ? 0 : -this.props.width,
      top: 0,
      bottom: 0,
      overflow: 'hidden',
      width: this.props.width,
      background: this.props.background,
      color: this.props.color,
      transition: 'left .5s ease-in'
    };

    const contentStyle = {
      position: 'fixed',
      left: this.state.collapsed ? 0 : this.props.width,
      top: 0,
      right: 0,
      bottom: 0,
      overflowX: 'hidden',
      overflowY: 'scroll',
      transition: 'left .5s ease-in'
    };

    const _toggleStyle = {
      position: 'fixed',
      fontSize: 28,
      borderRadius: 5,
      width: 28,
      height: 28,
      top: this.state.collapsed ? 10 : -999,
      left: this.state.open ? this.props.width + 14 : 14,
      opacity: this.state.collapsed ? 1 : 0,
      cursor: 'pointer',
      textDecoration: 'none',
      color: this.props.background,
      transition: 'left .5s ease-in,opacity .5s .5s ease-in'
    };

    const items = this.props.items.map((item) => {
      if (item.type === "selector") {
        return (
          <SidebarSelector
            key={item.id}
            background={this.props.background}
            color={this.props.color}
            selected={item.selected}
            type={item.type}
            options={item.options}
            onSelect={this._close}/>
        );
      } else {
        return (
          <SidebarItem
            {...item}
            key={item.id}
            background={this.props.background}
            color={this.props.color}
            onClick={this._close} />
        );
      }
    });

    const _toggleIcon = this.state.open ? <LeftArrow /> : <Bars />;

    return (
      <div>
        {/*Renders the children as the main content*/}
        <div style={contentStyle}>{this.props.children}</div>
        {/*Renders the Sidebar with given input array children*/}
        <div style={sidebarStyle}>{items}</div>
        <div style={_toggleStyle} onClick={this._toggle}>{_toggleIcon}</div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  width: 300,
  background: '#009688',
  color: '#fff',
  breakPoint: 980,
  items: []
};


export default Sidebar;
