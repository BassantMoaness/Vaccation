
import './App.css';
import React, { useState } from "react";
import moment from 'moment';
import * as $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css';
import CustomListDropDown from './components/CustomListDropDown';
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const {
    handleSubmit,
    register, setValue,
    control,
  } = useForm();
  const onSubmit = (data) => {
    // e.preventDefault();
    const startDate = moment(data.fromDateInput);
    const timeEnd = moment(data.toDateInput);
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);
    //console.log("Days:", diffDuration.days());
    setValue("duration", diffDuration.days());
    setValue("annualDays", 5);
    setValue("sickDays", 3);

    var type = parseInt($('.form-control').val());

    var obj = {
      "Id": 1,
      "UserId": 1,
      "UserName": "Ali",
      "Type": type,
      "DaysNumber": diffDuration.days()

    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then((res) => {
        if(res){
        console.log(res)
        setValue("annualDays", res.annualDays)
        setValue("sickDays", res.sickDays)
        } 
        else{
          setValue("annualDays", 15)
          setValue("sickDays", 10)
        }
      }
      )

}

const onChange = (event) => {
  control.log(event.target)
}

const [type, setType] = React.useState(null); // the lifted state



return (
  <div className="App">
    <div className='WindowDiv'>
      <div className='HeaderDiv'>
        <span className='FormTitle'>Vaccation Form</span>
        <span className="buttons"><span className="min">_</span><span className="max">[ ]</span><span className="close">X</span></span>

        <hr className='UnderLine' />
      </div>

      <div className='Section VaccationType'>
        <div className='label'>Select Vaccation Type</div>
        <CustomListDropDown
          onChange={(event) => {
            console.log(event.target.files)
            setType("type", event.target.files[0].name)
          }
          }
        />

      </div>


      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='Section RequestDetails'>
          <div className='label'>Create Request Details</div>

          <div className='DateInput'>
            <div className='DateInput'>
              <span className='DateSpan'>Start Date</span>
              <Controller
                control={control}
                name="fromDateInput"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(fromDate) => field.onChange(fromDate)}
                    selected={field.value}
                  />
                )}
              />
            </div>
            <div className='DateInput'>
              <span className='DateSpan'>End Date</span>
              <Controller
                control={control}
                name="toDateInput"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(toDate) => field.onChange(toDate)}
                    onBlur={(event) =>
                      // setEndDate(event.target.value)
                      console.log(event.target.value)
                    }
                    selected={field.value}
                  />
                )}
              />
            </div>
          </div>
          <div className='DateInput DaysIput'>
            <span className='DateSpan'>Days</span>
            <Controller
              control={control}
              name="Days"
              render={({ field }) => (
                <input className='InputStyle'
                  {...register("duration")}
                  onChange={(days) => field.onChange(days)}
                />
              )}
            />
          </div>

          <input type="submit" className='SubmitBtn' />

        </div>

        <div className='Section Balance'>
          <div className='label'>Validation Balance</div>
          <div>
            <table className='BalanceTable'>
              <thead>
                <tr>
                  <th >Type</th>
                  <th >Balance</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th >Annual</th>
                  <th>
                    <Controller
                      control={control}
                      name="annualDaysC"
                      render={({ field }) => (
                        <input className='RemoveBorder'
                          {...register("annualDays")}
                          onChange={(days) => field.onChange(days)}
                        />
                      )}
                    />
                  </th>

                </tr>
                <tr>
                  <th >Sick</th>
                  <th>
                    <Controller
                      control={control}
                      name="sickDaysC"
                      render={({ field }) => (
                        <input className='RemoveBorder'
                          {...register("sickDays")}
                          onChange={(days) => field.onChange(days)}
                        />
                      )}
                    />
                  </th>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  </div>
);
}

export default App;