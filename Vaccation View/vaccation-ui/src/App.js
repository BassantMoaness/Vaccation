
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomListDropDown from './components/CustomListDropDown';
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("dateInput"));

  return (
    <div className="App">
      <div className='WindowDiv'>
        <div className='HeaderDiv'>
          <span className='FormTitle'>Vaccation Form</span>
          <span className="buttons"><span className="min">_</span><span className="max">[ ]</span><span className="close">X</span></span>
   
          <hr className='UnderLine' />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='Section VaccationType'>
          <div className='label'>Select Vaccation Type</div>
          <Controller
                control={control}
                name="type"
                render={({ field }) => (
          <CustomListDropDown selected={field.value}/>
          )}
          />
        </div>
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
                  <input className='InputStyle' value={field.value} />
                )}
              />
            </div>

            <input type="submit" className='SubmitBtn'/>
          
        </div>
        </form>
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
              <th ></th>

            </tr>
            <tr>
              <th >Sick</th>
              <th ></th>

            </tr>
          </tbody>
        </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
