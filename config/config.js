import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import ColorPicker from 'react-color'
import ItemForm from './ItemForm'

export default class Config extends Component {

  constructor(props) {
    super(props)
    this.state = {
        background: '#f00',
        color: '#fff',
        items: []
    }
    this._colorChange = this._colorChange.bind(this)
    this._backgroundChange = this._backgroundChange.bind(this)
    this._removeItem = this._removeItem.bind(this)
    this._addItem = this._addItem.bind(this)
  }

  _backgroundChange(c) {
    const color = '#' + c.hex
    this.setState({background: color})
  }

  _colorChange(c) {
    const color = '#' + c.hex
    this.setState({color: color})
  }

  _removeItem(e) {
    let index = this.state.items.indexOf(e)
    let newItems = this.state.items.filter((_, i) => i !== index)
    this.setState({items: newItems})
  }

  _addItem(item) {
    item.id = this.state.items.length
    let newItems = [
      ...this.state.items,
      item
    ]
    this.setState({items: newItems})
  }

  render() {

    const style = {
      position: 'absolute',
      top: '10px',
      right: '25px',
      minWidth: '50px',
      minHeight: '50px',
      background: '#ccc'
    }

    const items = this.state.items.map(item => {
      return (
        <li key={item.id}>
          {item.title ? item.title : "unnamed"}
          <button onClick={this._removeItem.bind(this, item)}>x</button>
        </li>
      )
    })

    const fields = [
      { id:"title", name:"Title", type:"text" },
      { id:"icon", name:"Icon", type:"text" },
      { id:"href", name:"href", type:"text" },
      { id:"header", name:"Header", type:"checkbox" }
    ]

    return (
      <div>
        <Sidebar
          color={this.state.color}
          background={this.state.background}
          items={this.state.items}>
          {this.props.children}
        </Sidebar>
        <div style={style}>
          <label>Background</label>
          <ColorPicker type="compact" onChangeComplete={this._backgroundChange} color={this.state.background}/>
          <label>Font</label>
          <ColorPicker type="compact" onChangeComplete={this._colorChange} color={this.state.color}/>
          <label>Items</label>
          <ul>
            {items}
          </ul>
          <ItemForm fields={fields} onSubmit={this._addItem}/>
        </div>
      </div>
    )
  }
}
