import React from 'react'
export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.value}</strong>
    <select
      className="form-control"
      name="{props.value}"
      onChange={props.onChange}
    >
      {props.options.map((item, index) => (
        <option key={item.key} value={item.key}>
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
      key:0,
    }
  }
  componentDidMount() {
    var url='/api/Days/GetReminderVaccationDaysByUserId/1';
    fetch('https://localhost/VaccationApi/api/api/Type/GetAllTypes')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))


      if (this.state.collection.length == 0) {
        var types = [{ key: 1, value: 'Annual' }, { key: 2, value: 'Sick' }];
        this.setState({ collection: types });
    }

  }




  onChange = (event) => {
    this.setState({ 
        value: event.target.value ,
        key: event.target.key

    })
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
         // value={this.state.key}
        />
        </div>
      </div>
    )
  }
}