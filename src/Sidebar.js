import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Bars from 'react-icons/lib/fa/bars';
import LeftArrow from 'react-icons/lib/fa/chevron-left';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: window.innerWidth <= this.props.breakPoint,
      open: false,
    };
    props.onCollapse(this.state.collapsed);
    window.onkeyup = this.onKeyUp
    this._toggle = this._toggle.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._close = this._close.bind(this);
  }

  onKeyUp = (e) => {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code === 27 && this.state.collapsed && this.state.open) {
      this._close();
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize(e) {
    if (window.innerWidth <= this.props.breakPoint && !this.state.collapsed) {
      this.props.onCollapse(true)
      this.setState({collapsed: true});
    }else if(window.innerWidth > this.props.breakPoint && this.state.collapsed){
      this.props.onCollapse(false)
      this.setState({collapsed: false});
    }
  }

  onItemSelected = (props) => {
    this.props.onItemSelected(props)
    if (this.props.closeOnItemSelect) { this._close() };
  }

  _close() {
    this.setState({open: false});
    this.props.onToggle(false);
  }

  _toggle() {
    const open = !this.state.open;
    this.setState({open: open});
    this.props.onToggle(open)
  }

  render() {

    const styles = getStyles(this.props, this.state);
    const _toggleIcon = this.state.open ? <LeftArrow /> : <Bars />;
    const content = this.props.content.map((el, idx) => React.cloneElement(el, {
       key: idx,
       hoverHighlight: el.props.hoverHighlight || this.props.hoverHighlight,
       activeHighlight: el.props.activeHighlight || this.props.activeHighlight,
       onClick: (e) => {
           if(el.props.onClick){
               el.props.onClick(e);
           }; 
           this.onItemSelected(e);
       }
     }));
    // const content = React.Children.map(this.props.content, React.cloneElement(item, {
    //   hoverHighlight: item.props.hoverHighlight || this.props.hoverHighlight,
    //   activeHighlight: item.props.activeHighlight || this.props.activeHighlight,
    // }));

    return (
      <div style={{WebkitTapHighlightColor: "rgba(0,0,0,0)"}}>
        {/*Renders the children as the main content*/}
        <div style={styles.content}>{this.props.children}</div>
        {/*Renders the Backdrop when the drawn is collapsed and opened*/}
        {this.props.backdrop ?
          <div style={styles.backdrop} onClick={this._close}></div> : ""
        }
        {/*Renders the Sidebar with given input array children*/}
        <div style={styles.sidebar}>{content}</div>
        <div style={styles.toggle} onClick={this._toggle}>{_toggleIcon}</div>
      </div>
    );
  }
}

let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

Sidebar.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  backdrop: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  width: PropTypes.number,
  breakPoint: PropTypes.number,
  toggleIconSize: PropTypes.number,
  toggleIconColor: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.element),
  textAlign: PropTypes.string,
  hoverHighlight: PropTypes.string,
  activeHightlight: PropTypes.string,
  onItemSelected: PropTypes.func,
  onCollapse: PropTypes.func,
  onToggle: PropTypes.func,
  closeOnItemSelect: PropTypes.bool,
};

Sidebar.defaultProps = {
  width: 300,
  background: '#009688',
  color: '#fff',
  breakPoint: 980,
  toggleIconSize: 28,
  content: [],
  backdrop: true,
  closeOnBackdropClick: true,
  closeOnItemSelect: true,
  onItemSelected: () => {},
  onCollapse: () => {},
  onToggle: () => {},
};

let getStyles = (props, state) => {
  return {
    sidebar: {
      position: 'absolute',
      left: !state.collapsed || state.open ? 0 : -props.width,
      top: 0,
      bottom: 0,
      overflowX: 'hidden',
      overflowY: iOS ? 'scroll' : 'auto',
      WebkitOverflowScrolling: "touch",
      textAlign: props.textAlign,
      width: props.width,
      background: props.background,
      color: props.color,
      transition: 'left .25s ease-in',
    },
    content: {
      position: 'absolute',
      left: state.collapsed ? 0 : props.width,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: iOS ? 'scroll' : 'auto',
      WebkitOverflowScrolling: "touch",
      transition: 'left .25s ease-in',
    },
    toggle: {
      position: 'absolute',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: props.toggleIconSize,
      width: (props.toggleIconSize * 2),
      height: (props.toggleIconSize * 2),
      top: state.collapsed ? 0 : -999,
      left: state.open ? props.width : 0,
      opacity: state.collapsed ? 1 : 0,
      cursor: 'pointer',
      color: props.toggleIconColor || props.background,
      transition: 'left .25s ease-in,opacity .5s .5s ease-in',
    },
    backdrop: {
      position: 'absolute',
      visibility: state.collapsed && state.open ? "visible" : "hidden",
      background: 'black',
      opacity: state.collapsed && state.open ? 0.3 : 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      transition: 'left .25s ease-in,opacity .5s ease-in, visibility .5s',
    },
  };
};



export default Radium(Sidebar);
