import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Row(props) {
  let Deleta=()=>{
props.RowDeleted(props.viewData.id);
  };
  return(
    <tr>
    <td> {props.viewData.title} </td>
    <td>{props.viewData.date}</td>
    <td>{props.viewData.value} </td>
    <td colSpan="2">{props.viewData.description} </td>
    <td className="text-right">
      <a 
        href="#"
        className="delete"
        onClick={Deleta}
        >
      <FontAwesomeIcon icon ={faTrashAlt} aria-hidden="true"/>
      </a>
    </td>
  </tr>
  );
}
export default Row;