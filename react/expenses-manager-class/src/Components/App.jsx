import { Component } from 'react';
import Swal from 'sweetalert2';
import logo from '../Recources/img/m1.png';
import Form from './Form';
import Table from './Table';
class App extends Component {
constructor(){
  super();
  this.state={NewArray:[]}
}
Adding=(New)=>{
//set([Expen]) one time
// set((Expen)=>{ tow time
// return [New,...Expen]
// });  
this.setState({NewArray:[New,...this.state.NewArray]})
}
Deleted=(id)=>{
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    let NewFillter=this.state.NewArray.filter((element)=>element.id!=id)
this.setState({NewArray:NewFillter})
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
}
    render() {      
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={logo}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-sm-6 mt-5">
            <div className="row tit">
              <h4 className="">wellcom to Momen Expense Manager </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <Form OnAdding={this.Adding}/>
          </div>
        </div>
        <Table EmptyRow={this.state.NewArray} onDeleted={this.Deleted} />
      </div>
    );
  }
}
export default App;
//git add . 
//1-git add name folder
//2-git commit -m "وصف للفولدر ايش فيه "
//3- لو بدي ادخل داخل ملف cd