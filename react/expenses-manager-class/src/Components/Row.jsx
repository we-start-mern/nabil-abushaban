import { Component } from "react";
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Row extends Component{
FonalDeleted=()=>{
this.props.onDeletedRow(this.props.ShowData.id)
}
  render(){
    return(
      <tr>
      <td> {this.props.ShowData.title} </td>
      <td> {this.props.ShowData.data}</td>
      <td>{this.props.ShowData.value} </td>
      <td colSpan="2">{this.props.ShowData.description} </td>
      <td className="text-right">
        <a href="#" className="delete" onClick={this.FonalDeleted}>
          <FontAwesomeIcon icon={faTrashAlt} aria-hidden="true"/> 
            </a></td>
    </tr>
    )
  }
}
export default Row;