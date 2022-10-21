import { Component } from 'react';
import Swal from 'sweetalert2';

class Form extends Component {
  constructor() {
    super();
    this.state = { title: '', data: '', value: '', description: '' };
  }
  OnSubmit = (event) => {
    event.preventDefault();
    if (this.cheak()) {
      this.SaveObject();
    }
  };
  SaveObject = () => {
    let NewObject = {
      id: Math.random(),
      title: this.state.title,
      data: this.state.data,
      value: this.state.value,
      description: this.state.description,
    };
    this.props.OnAdding(NewObject);
Swal.fire({
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: true,
  timer: 1500
})
     this.EmptyForm();
  };
  onTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  onData = (event) => {
    this.setState({ data: event.target.value });
  };
  onValue = (event) => {
    this.setState({ value: event.target.value });
  };
  ondescription = (event) => {
    this.setState({ description: event.target.value });
  };
 EmptyForm=()=>{
  this.state.title="";
   this.state.data="";
   this.state.value="";
   this.state.description="";
 }
  cheak = () => {
    if (
      this.state.title != '' &&
      this.state.data != '' &&
      this.state.value != '' &&
      this.state.description != ''
    ) {
      return true;
    }
    this.Massege();
    return false;
  };
  Massege=()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'please Enter Data!',
    })
  }

  render() {
    return (
      <form
        className="row"
        onSubmit={this.OnSubmit}>
        <div className="mb-3 col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control
              addTitle"
            aria-describedby=""
            onChange={this.onTitle}
            value={this.state.title}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control addDate"
            aria-describedby=""
            onChange={this.onData}
            value={this.state.data}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Value</label>
          <input
            type="number"
            className="form-control addValue"
            aria-describedby=""
            onChange={this.onValue}
            value={this.state.value}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label
            htmlFor="title"
            className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control addDescrption"
            aria-describedby=""
            onChange={this.ondescription}
            value={this.state.description}
          />
        </div>
        <div className="mb-3 col-md-12 text-right">
          <button
            type="submit"
            className="btn btn-primary addBtn">
            Add
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
