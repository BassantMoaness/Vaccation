import React from 'react'
export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.value}</strong>
    <select
      className="form-control"
      name="{props.value}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={item.key} value={item.value}>
          {item.value}
        </option>
      ))}
    </select>
  </div>
)
export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    
    // fetch('https://localhost/VaccationApi/api/')
    //   .then((response) => response.json())
    //   .then((res) => this.setState({ collection: res }))
    var types=[{key:1,value:'Annual'},{key:2,value:'Sick'}];
    this.setState({collection: types });
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="TypeDivStyle">
        <span className='TypeSpan'>Type</span>
        <div className='TypeSelectison'>
        <CustomDropdown className='TypeDivStyle'
          name={this.state.value}
          options={this.state.collection}
          onChange={this.onChange}
        />
        </div>
      </div>
    )
  }
}