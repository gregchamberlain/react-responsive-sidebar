import React, { Component } from 'react'

export default class ItemForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: props.fields
    }
    this._submit = this._submit.bind(this)
  }

  _submit() {
    let output = {}
    Object.keys(this.refs).forEach( key => {
      let field = this.refs[key]
      if (field.type === "checkbox") {
        output[key] = field.checked
      } else if (field.type === "text") {
        output[key] = field.value
      }
    })
    this.props.onSubmit(output)
  }

  render() {

    const fields = this.props.fields.map((field,index) => {
        return (
          <div key={index}>
            <label>{field.name}</label>
            <input type={field.type} ref={field.id}/>
          </div>
        )
    })

    return (
      <div>
        {fields}
        <button onClick={this._submit} className="btn btn-primary">Save</button>
      </div>
    )
  }
}
