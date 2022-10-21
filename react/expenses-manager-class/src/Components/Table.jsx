import { Component } from 'react';
import Row from './Row';
class Table extends Component {
  render() {
    return (
      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <table className="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr id="addRow"></tr> 
           {this.props.EmptyRow.map((element)=>( <Row key={element.id} ShowData={element} onDeletedRow={this.props.onDeleted} />))}
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Table;
