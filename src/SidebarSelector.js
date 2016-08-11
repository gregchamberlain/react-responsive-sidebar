import React, { Component } from 'react'
import SidebarItem from './SidebarItem'
import CaretDown from 'react-icons/lib/fa/caret-down'
import CaretUp from 'react-icons/lib/fa/caret-up'

export default class SidebarSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  _select = () => {
    this.props.onSelect()
    this.setState({open: false})
  }

  _toggle = () => {
    const open = this.state.open
    this.setState({open: !open})
  }

  render() {

    const { selected, options } = this.props

    const collapse = options.map((option) => {
      if (option.id === selected.id) {
        return
      }
      return (
        <SidebarItem
          {...this.props}
          key={option.id}
          title={option.title}
          onClick={this._select}
          href={option.href} />
      )
    })

    const icon = this.state.open ? <CaretUp /> : <CaretDown />

    return (
      <div>
        <SidebarItem
          {...this.props}
          key={selected.id}
          title={selected.title}
          icon={options.length > 1 ? icon : null}
          onClick={this._toggle} />
        { this.state.open ? collapse : null}
      </div>
    )
  }
}
